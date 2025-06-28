export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx6KOFuwceQOxlrPLQekkBjfgI9olqFpkd0pEK6BQHHOnT-AVH8wi4Uh4_ur_lerHyC/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.status(200).send(text);
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).send('❌ Gagal proxy ke Google Script');
  }
}
