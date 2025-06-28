export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwC_ArGcfNNIp1jlE-jdU7GOVfFz7EoWmqG255UJ2lNQ2l4SD3qwAOEXZjGfLKjI13H/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    const result = await response.text();

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(result);
  } catch (error) {
    console.error('❌ Proxy simpan error:', error);
    res.status(500).send('❌ Gagal proxy ke Google Script');
  }
}
