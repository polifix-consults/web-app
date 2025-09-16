export async function GET(request) {
  const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY; // keep your original
  if (!MAILCHIMP_API_KEY) return new Response(JSON.stringify({ error: 'Missing API key' }), { status: 500 });

  const DC = MAILCHIMP_API_KEY.split('-')[1];
  const BASE = `https://${DC}.api.mailchimp.com/3.0`;

  try {
    const url = `${BASE}/campaigns?status=sent&count=10&fields=campaigns.id,campaigns.settings.subject_line,campaigns.settings.title,campaigns.send_time,campaigns.archive_url,total_items`;

    const resp = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
    });

    if (!resp.ok) throw new Error('Mailchimp API request failed');

    const data = await resp.json();

    // Map campaigns and fetch first image for each
    const campaigns = await Promise.all(
      data.campaigns.map(async (c) => {
        let image = '/default-newsletter.jpg'; // fallback

        try {
          const contentResp = await fetch(`${BASE}/campaigns/${c.id}/content`, {
            headers: {
              Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
            },
          });

          if (contentResp.ok) {
            const contentData = await contentResp.json();
            const html = contentData?.html || '';
            const match = html.match(/<img.*?src=["'](.*?)["']/i);
            if (match && match[1]) image = match[1];
          }
        } catch (err) {
          console.error(`Failed to fetch content for campaign ${c.id}:`, err);
        }

        return {
          id: c.id,
          title: c.settings?.title || null,
          subject: c.settings?.subject_line || null,
          send_time: c.send_time,
          archive_url: c.archive_url,
          image, // added image field
        };
      })
    );

    return new Response(JSON.stringify({ total: data.total_items, campaigns }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to fetch campaigns' }), { status: 500 });
  }
}
