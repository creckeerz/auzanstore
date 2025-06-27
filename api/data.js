export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz698wTJ7_-BclMcEziWXNaTNUOcxRhTLCAPngcBVzOysRsI1351JgTEstWoxYaMcrz/exec',
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

