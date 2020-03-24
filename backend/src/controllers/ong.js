import crypto from 'crypto';

import ongService from '../services/ong';

exports.create = async (req, res) => {
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
    await ongService.create(ongData);
    return res.status(201).json({ id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const ongs = await ongService.getAll();
    return res.json(ongs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getIncidentsByOng = async (req, res) => {
  const { id } = req.params;

  try {
    const incidents = await ongService.getIncidentsByOng(id);
    return res.json(incidents);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
