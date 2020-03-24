import database from '../database';

exports.createOng = async (ongData) => {
  const ong = await database('ongs').insert(ongData);
  return ong;
};
