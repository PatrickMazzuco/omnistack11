import database from '../database';

exports.createOng = async (ongData) => {
  const ong = await database('ongs').insert(ongData);
  return ong;
};

exports.getOngs = async () => {
  const ongs = await database('ongs').select('*');
  return ongs;
};
