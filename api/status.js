export default async function handler(req, res) {
  const baseUrl = 'https://script.google.com/macros/s/AKfycbxuRfaWHE77oX3F8k1pjQr9OcymGT_S4Y1Sf8SSRXkXtwRrrdvQ6jdxsSP0jaNA6rFj/exec';

  try {
    if (req.method === 'GET') {
      const response = await fetch(`${baseUrl}?mode=status`);
      const status = await response.text();

      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).send(status);
    }

    if (req.method === 'POST') {
      const response = await fetch(`${baseUrl}?mode=update`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: req.body, // 'maintenance' atau 'normal'
      });

      const result = await response.text();
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).send(result);
    }

    return res.status(405).end('Method Not Allowed');
  } catch (err) {
    console.error('❌ Proxy status error:', err);
    res.status(500).send('❌ Gagal memproses status');
  }
}
