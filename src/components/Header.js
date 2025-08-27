import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Don't render header on login page
  if (location.pathname === "/login") {
    return null;
  }

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="header-left" onClick={() => navigate('/')}>
        <img src={logo} alt="Zohologo" style={{ cursor: 'pointer' }} />
      </div>
      <p className="header-right">
        Have a Zoho Account?{' '}
        <span
          className="header-link"
          style={{ cursor: 'pointer', textDecoration: 'none', color: '#e24814ff' }}
          onClick={handleSignInClick}
        >
          SIGN IN
        </span>
      </p>
    </header>
  );
}

export default Header;
