export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwY1LzitDn6UbLO_HkFp_rxlgs8lCa2CLa-8CHxMIAVV0N26ZdElrQyFs53Vuyc6Q3p/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );

    const text = await response.text();

    // ⛔️ Tambahkan header agar hasil tidak dicache
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    res.status(200).send(text);
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).send('❌ Gagal proxy ke Google Script');
  }
}
