import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleRegister = async e => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('/ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
            type="text"
          />
          <input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            required
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
            type="text"
          />
          <div className="input-group">
            <input
              required
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
              type="text"
            />
            <input
              required
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              type="text"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
