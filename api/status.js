export default async function handler(req, res) {
  const url = 'https://script.google.com/macros/s/AKfycbwY1LzitDn6UbLO_HkFp_rxlgs8lCa2CLa-8CHxMIAVV0N26ZdElrQyFs53Vuyc6Q3p/exec';

  try {
    if (req.method === 'GET') {
      const response = await fetch(`${url}?mode=status`);
      const status = await response.text();
      return res.status(200).send(status.trim());
    }

    if (req.method === 'POST') {
      const body = await req.text();
      if (body === 'maintenance' || body === 'normal') {
        await fetch(`${url}?mode=update`, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body
        });
        return res.status(200).send('✅ Status diperbarui');
      } else {
        return res.status(400).send('❌ Status tidak valid');
      }
    }

    res.status(405).send('Method Not Allowed');
  } catch (error) {
    console.error('Gagal menghubungi Google Script:', error);
    res.status(500).send('error');
  }
}
