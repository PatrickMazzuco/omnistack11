import crypto from 'crypto';

import ongService from '../services/ong';

exports.createOng = async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  const ongData = {
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  };

  try {
    await ongService.createOng(ongData);
    return res.status(201).json({ id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getOngs = async (req, res) => {
  try {
    const ongs = await ongService.getOngs();
    return res.json(ongs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
