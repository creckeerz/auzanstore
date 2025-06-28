// file: /api/maintenance.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const status = req.body.status;

    const response = await fetch("https://script.google.com/macros/s/AKfycbwcH3MsaF5T2K8X5hsuPsx3ZJoP_FKOcmC8TO-whJuUfwa6PHFB3wPXsokRR6XV13Gm/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    const result = await response.text(); // atau .json() jika kamu balas JSON
    return res.status(200).json({ success: true, result });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
