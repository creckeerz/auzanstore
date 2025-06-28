export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwcH3MsaF5T2K8X5hsuPsx3ZJoP_FKOcmC8TO-whJuUfwa6PHFB3wPXsokRR6XV13Gm/exec',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const text = await response.text();

    // Coba parse ke JSON
    try {
      const json = JSON.parse(text);
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json(json);
    } catch (parseErr) {
      console.error('❌ Parsing JSON gagal. Respons:', text);
      res.status(500).send('❌ Response bukan JSON: \n' + text);
    }
  } catch (error) {
    console.error('❌ Fetch ke GAS gagal:', error);
    res.status(500).json({ error: 'Gagal ambil data dari Spreadsheet' });
  }
}
