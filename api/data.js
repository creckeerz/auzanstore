export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxlpjSKq8NiLax8eWctSh8SBKNTUgr1Kxw5I2XWFWkMw0hKH-1fsZieqxVxuGN8ZPE9/exec
',
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

