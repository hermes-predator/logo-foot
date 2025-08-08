
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const SUMUP_API_URL = 'https://api.sumup.com/v0.1'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { amount, currency, description } = await req.json()
    const sumupKey = Deno.env.get('SUMUP_SECRET_KEY')

    if (!sumupKey) {
      throw new Error('La clé API SumUp n\'est pas configurée')
    }

    // Création du checkout SumUp
    const checkoutResponse = await fetch(`${SUMUP_API_URL}/checkouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sumupKey}`,
      },
      body: JSON.stringify({
        checkout_reference: `order_${Date.now()}`,
        amount,
        currency,
        description,
        return_url: `${req.headers.get('origin') || ''}/payment-success-token13061995`,
        merchant_code: Deno.env.get('SUMUP_MERCHANT_CODE'),
      }),
    })

    if (!checkoutResponse.ok) {
      const errorData = await checkoutResponse.json()
      throw new Error(errorData.message || 'Erreur lors de la création du checkout SumUp')
    }

    const checkoutData = await checkoutResponse.json()

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
