import ongService from '../services/ong';

exports.login = async (req, res) => {
  const { id } = req.body;

  try {
    const ong = await ongService.getById(id);
    if (!ong) return res.status(404).send();

    return res.json({ name: ong.name });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
