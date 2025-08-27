// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import '../pages/view/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <Header />
      <main className="auth-container" role="main">
        <img
          src={logo}
          alt="Zoho Logo"
          className="auth-logo"
          aria-hidden="true"
        />
        <h1 className="auth-heading">Log in to access Zoho.</h1>

        <button
          className="auth-button"
          type="button"
          onClick={handleSignInClick}
        >
          SIGN IN
        </button>

        <p className="auth-signup">
          Don’t have a Zoho account?{' '}
          <span
            className="auth-link"
            style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
            onClick={handleSignUpClick}
          >
            Sign Up Now
          </span>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Login;
