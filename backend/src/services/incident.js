import database from '../database';

exports.create = async (incident) => {
  const [id] = await database('incidents').insert(incident);
  return id;
};

exports.getAll = async (page) => {
  const incidents = await database('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset(page * 5 - 5)
    .select(
      'incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf'
    );
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

exports.count = async () => {
  const [count] = await database('incidents').count();
  return count;
};
