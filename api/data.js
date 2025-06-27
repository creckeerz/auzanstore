export default async function handler(req, res) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz698wTJ7_-BclMcEziWXNaTNUOcxRhTLCAPngcBVzOysRsI1351JgTEstWoxYaMcrz/exec');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Gagal ambil data:', err);
    res.status(500).json({ error: 'Gagal ambil data dari Google Sheets' });
  }
}
