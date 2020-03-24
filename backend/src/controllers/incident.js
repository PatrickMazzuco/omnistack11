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

exports.getAll = async (req, res) => {
  try {
    const incidents = await incidentService.getAll();
    return res.json(incidents);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  try {
    const incident = await incidentService.getById(id);

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ message: 'Operation not permitted.' });
    }

    await incidentService.delete(id);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const incident = await incidentService.getById(id);

    if (!incident) return res.status(500).send();

    return res.status(204).json(incident);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
