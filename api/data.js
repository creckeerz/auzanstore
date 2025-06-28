export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyLq-XIXuF5TkSiROre1A7JEj5-hPjYWbVr4VvmUh9aDD3MnXU2LntTkGdpAPZkz1cx/exec',
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

