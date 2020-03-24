import incidentService from '../services/incident';

exports.create = async (req, res) => {
  try {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const incident = {
      title,
      description,
      value,
      ong_id
    };

    const id = await incidentService.create(incident);
    return res.status(201).json({ id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
