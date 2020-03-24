import database from '../database';

exports.create = async (incident) => {
  const [id] = await database('incidents').insert(incident);
  return id;
};
