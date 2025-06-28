eexport default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz698wTJ7_-BclMcEziWXNaTNUOcxRhTLCAPngcBVzOysRsI1351JgTEstWoxYaMcrz/exec?mode=status'
    );
    const status = await response.text();
    res.status(200).send(status.trim());
  } catch (error) {
    console.error('Gagal mengambil status:', error);
    res.status(500).send('error');
  }
}
