let currentStatus = 'normal'; // simpan sementara di memori (bisa juga pakai Sheet/Database)

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: currentStatus });
  } else if (req.method === 'POST') {
    const { status } = req.body;
    if (status === 'normal' || status === 'maintenance') {
      currentStatus = status;
      res.status(200).json({ success: true, status: currentStatus });
    } else {
      res.status(400).json({ error: 'Status tidak valid' });
    }
  } else {
    res.status(405).end();
  }
}
