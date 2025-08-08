import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const SUMUP_API_URL = 'https://api.sumup.com/v0.1';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { checkoutId } = await req.json();
    if (!checkoutId) {
      return new Response(JSON.stringify({ error: 'Missing checkoutId' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const sumupKey = Deno.env.get('SUMUP_SECRET_KEY');
    if (!sumupKey) {
      throw new Error('SUMUP_SECRET_KEY is not configured');
    }

    const res = await fetch(`${SUMUP_API_URL}/checkouts/${checkoutId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${sumupKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`SumUp verify error: ${res.status} ${txt}`);
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('verify-payment error:', error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
