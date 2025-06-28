// file: /api/maintenance.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const status = req.body.status;

    const response = await fetch("https://script.google.com/macros/s/AKfycbwFnXGXb0CLX9oOxdJ7mWkPcy8DU5B1lPsjFdMDznG78vT_kaNiVtFCARP-ufHm3pGc/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    const result = await response.text(); // atau .json() jika kamu balas JSON
    return res.status(200).json({ success: true, result });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
