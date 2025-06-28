export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxuRfaWHE77oX3F8k1pjQr9OcymGT_S4Y1Sf8SSRXkXtwRrrdvQ6jdxsSP0jaNA6rFj/exec',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const json = await response.json();

    // Anti cache
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(json);
  } catch (error) {
    console.error('Fetch Data Error:', error);
    res.status(500).json({ error: 'Gagal ambil data dari Spreadsheet' });
  }
}

