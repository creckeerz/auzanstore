export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxEzmQ2TtABSzHMIHsklx91B5PMiDTF5QjSLBwejwQpuRwRwC0F-KIGjax6o-NCXTDX/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });

      const text = await response.text();
      res.status(200).send(text);
    } catch (error) {
      res.status(500).json({ error: 'Gagal proxy ke Google Script', detail: error.toString() });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
