import database from '../database';

exports.create = async (ongData) => {
  const ong = await database('ongs').insert(ongData);
  return ong;
};

exports.getAll = async () => {
  const ongs = await database('ongs').select('*');
  return ongs;
};
