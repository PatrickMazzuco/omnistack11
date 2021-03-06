import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import Incident from './components/Incident';

import './styles.css';

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const fetchIncidents = async () => {
    try {
      const response = await api.get(`/ongs/${ongId}/incidents`);
      setIncidents(response.data);
    } catch (err) {
      alert('Erro ao buscar casos.');
    }
  };

  const removeIncident = id => {
    setIncidents(incidents.filter(incident => incident.id !== id));
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    if (!ongId) history.push('/');
    fetchIncidents();
  }, []);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <Incident data={incident} onRemove={removeIncident} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
