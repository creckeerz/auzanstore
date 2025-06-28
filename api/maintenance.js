// file: /api/maintenance.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const status = req.body.status;

    const response = await fetch("https://script.google.com/macros/s/AKfycbypxbHgq4EQ10nnLk2vDty7yvM8tR6xJH7fnkQsR-ZtgAICIBLsAOI46n4yV4zM3qjO/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    const result = await response.text(); // atau .json() jika kamu balas JSON
    return res.status(200).json({ success: true, result });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
