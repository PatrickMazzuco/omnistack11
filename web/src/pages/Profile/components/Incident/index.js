import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../../../services/api';

const Incident = props => {
  const { title, description, value, id } = props.data;

  const handleDelete = async () => {
    const ongId = localStorage.getItem('ongId');
    try {
      await await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      props.onRemove(id);
    } catch (err) {
      console.log(err);
      alert('Erro ao deletar caso. Tente novamente.');
    }
  };

  return (
    <>
      <strong>CASO:</strong>
      <p>{title}</p>
      <strong>DESCRIÇÃO:</strong>
      <p>{description}</p>
      <strong>VALOR:</strong>
      <p>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}
      </p>

      <button onClick={handleDelete} type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </>
  );
};

export default Incident;
