
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
    const merchantCode = Deno.env.get('SUMUP_MERCHANT_CODE')

    if (!sumupKey) {
      throw new Error('La clé API SumUp n\'est pas configurée')
    }

    if (!merchantCode) {
      throw new Error('Le code marchand SumUp n\'est pas configuré')
    }

    // Générer une référence alphanumérique simple (SumUp n'accepte pas les caractères spéciaux)
    const checkoutReference = `FC${Date.now()}`
    
    // Nettoyer la description (enlever les caractères spéciaux)
    const cleanDescription = description 
      ? description.replace(/[^\w\s\-\.]/g, '').substring(0, 100)
      : 'Football.zip - Collection de logos'

    const checkoutPayload = {
      checkout_reference: checkoutReference,
      amount: Number(amount),
      currency: currency || 'EUR',
      description: cleanDescription,
      return_url: `${req.headers.get('origin') || 'https://www.logo-foot.com'}/payment-success-token13061995`,
      merchant_code: merchantCode,
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
