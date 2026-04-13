export async function POST(request) {
  try {
    const { email } = await request.json();

    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = API_KEY.split("-")[1]; // e.g., "us10"

    const response = await fetch(
      `https://us10.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const result = await response.json();
    console.log("Mailchimp response:", result);

    if (response.status >= 400) {
      return new Response(
        JSON.stringify({ error: result.detail || "Failed to subscribe." }),
        {
          status: 400,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Subscribed successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error." }), {
      status: 500,
    });
  }
}
