eexport default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwtJPPYdJ1gwkCbCo0DDNzTFzkw66ZsOde-4Z4l1_hPzpI87x6e9pace6-QAmdYlgBd/exec?mode=status'
    );
    const status = await response.text();
    res.status(200).send(status.trim());
  } catch (error) {
    console.error('Gagal mengambil status:', error);
    res.status(500).send('error');
  }
}
