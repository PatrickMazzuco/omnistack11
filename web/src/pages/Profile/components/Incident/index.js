import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Incident = ({ title, description, value }) => {
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

      <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </>
  );
};

export default Incident;
