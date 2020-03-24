import database from '../database';

exports.create = async (ongData) => {
  const ong = await database('ongs').insert(ongData);
  return ong;
};

exports.getAll = async () => {
  const ongs = await database('ongs').select('*');
  return ongs;
};

exports.getIncidentsByOng = async (id) => {
  const incidents = await database('incidents').where('ong_id', id).select('*');
  return incidents;
};

exports.getById = async (id) => {
  const ong = await database('ongs').where('id', id).select('*');
  return ong;
};
