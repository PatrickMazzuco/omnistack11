import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import './styles.css';

const Login = () => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Sign In</h1>
          <input placeholder="Your ID" type="text" />
          <button className="button" type="submit">
            Log in
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Don't have an account? Sign Up
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Login;