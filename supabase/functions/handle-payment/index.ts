
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const SUMUP_API_URL = 'https://api.sumup.com/v0.1'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    console.log('Request body:', JSON.stringify(body))
    
    const { amount, currency, description } = body
    const sumupKey = Deno.env.get('SUMUP_SECRET_KEY')
    const merchantCodeFromEnv = Deno.env.get('SUMUP_MERCHANT_CODE')

    if (!sumupKey) {
      throw new Error('La clé API SumUp n\'est pas configurée')
    }

    // Résoudre le merchant_code depuis l'API key (source de vérité), avec fallback sur la variable d'env.
    // Cela évite les erreurs quand l'API key appartient à un autre compte marchand.
    let resolvedMerchantCode: string | undefined = merchantCodeFromEnv || undefined

    try {
      const meRes = await fetch(`${SUMUP_API_URL}/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${sumupKey}`,
          'Accept': 'application/json',
        },
      })

      const meText = await meRes.text()
      console.log('SumUp /me status:', meRes.status)

      if (meRes.ok && meText) {
        const me = JSON.parse(meText)
        const apiMerchantCode =
          me?.merchant_code ||
          me?.merchant_profile?.merchant_code ||
          me?.merchant_profile?.id ||
          me?.merchant?.merchant_code

        if (typeof apiMerchantCode === 'string' && /^[A-Za-z0-9]+$/.test(apiMerchantCode)) {
          resolvedMerchantCode = apiMerchantCode
        }
      } else {
        // On ne bloque pas ici: on laissera le fallback env faire le job.
        console.log('SumUp /me body (debug):', meText?.slice(0, 500))
      }
    } catch (e) {
      console.log('SumUp /me failed (non bloquant):', e?.message || String(e))
    }

    if (!resolvedMerchantCode) {
      throw new Error('Impossible de déterminer le merchant_code SumUp (vérifiez SUMUP_SECRET_KEY / SUMUP_MERCHANT_CODE)')
    }

    console.log('Resolved merchant_code:', resolvedMerchantCode)

    // Générer une référence alphanumérique simple (SumUp n'accepte pas les caractères spéciaux)
    const checkoutReference = `FC${Date.now()}`
    
    // Nettoyer la description (enlever les caractères spéciaux)
    const cleanDescription = description 
      ? description.replace(/[^\w\s\-\.]/g, '').substring(0, 100)
      : 'Football.zip - Collection de logos'

    const baseReturnUrl = `${req.headers.get('origin') || 'https://www.logo-foot.com'}/payment-success-token13061995`

    const checkoutPayload = {
      checkout_reference: checkoutReference,
      amount: Number(amount),
      currency: currency || 'EUR',
      description: cleanDescription,
      merchant_code: resolvedMerchantCode,
    }

    console.log('SumUp checkout payload:', JSON.stringify(checkoutPayload))

    // Création du checkout SumUp
    const checkoutResponse = await fetch(`${SUMUP_API_URL}/checkouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sumupKey}`,
      },
      body: JSON.stringify(checkoutPayload),
    })

    const responseText = await checkoutResponse.text()
    console.log('SumUp response status:', checkoutResponse.status)
    console.log('SumUp response body:', responseText)

    if (!checkoutResponse.ok) {
      let errorMessage = 'Erreur lors de la création du checkout SumUp'
      try {
        const errorData = JSON.parse(responseText)
        errorMessage = errorData.message || errorData.error_message || errorMessage
      } catch {
        errorMessage = responseText || errorMessage
      }
      throw new Error(errorMessage)
    }

    const checkoutData = JSON.parse(responseText)
    
    // Ajouter le checkout_id à la return_url pour que la page de succès puisse vérifier le paiement
    const returnUrlWithCheckoutId = `${baseReturnUrl}?checkout_id=${checkoutData.id}`
    
    // Mettre à jour le checkout avec la return_url contenant le checkout_id
    const updateResponse = await fetch(`${SUMUP_API_URL}/checkouts/${checkoutData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sumupKey}`,
      },
      body: JSON.stringify({
        return_url: returnUrlWithCheckoutId,
      }),
    })
    
    if (updateResponse.ok) {
      console.log('Return URL mise à jour avec checkout_id:', returnUrlWithCheckoutId)
      checkoutData.return_url = returnUrlWithCheckoutId
    } else {
      console.log('Impossible de mettre à jour return_url, utilisation de la redirection côté client')
    }

    return new Response(
      JSON.stringify(checkoutData),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Erreur de paiement:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
