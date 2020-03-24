import database from '../database';

exports.create = async (incident) => {
  const [id] = await database('incidents').insert(incident);
  return id;
};

exports.getAll = async () => {
  const incidents = await database('incidents').select('*');
  return incidents;
};

exports.getById = async (id) => {
  const incident = await database('incidents').where('id', id).first();
  return incident;
};

exports.delete = async (id) => {
  const incident = await database('incidents').where('id', id).delete();
  return incident;
};
