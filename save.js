// api/save.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const filePath = path.join(process.cwd(), 'public', 'paket.json');
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      res.status(200).json({ message: 'Berhasil disimpan ke paket.json' });
    } catch (error) {
      res.status(500).json({ error: 'Gagal menyimpan' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
