import crypto from 'crypto';

exports.createOng = async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');
  return res.json(req.body);
};
