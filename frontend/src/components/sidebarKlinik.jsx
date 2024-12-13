import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faNewspaper,
  faFileLines,
  faEnvelopesBulk,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';
import axios from 'axios';

function Sidebar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const sidebarStyle = {
    width: '250px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    color: '#343a40',
  };

  const buttonStyle = (active) => ({
    textDecoration: 'none',
    color: active ? '#007bff' : '#343a40',
    fontWeight: active ? 'bold' : 'normal',
    backgroundColor: active ? '#e8f4ff' : '#f8f9fa',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s',
    marginBottom: '10px',
  });

  const logoStyle = {
    width: '150px',
    height: 'auto',
    marginBottom: '20px',
  };

  return (
    <div className="d-flex vh-100">
      <div className="d-flex flex-column" style={sidebarStyle}>
        <div className="p-3 d-flex justify-content-center">
          <a href="#" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="Logo" style={logoStyle} />
          </a>
        </div>
        <nav className="flex-grow-1 px-4 py-4">
          {[
            {
              path: '/klinik/klinik-dashboard',
              icon: faHouse,
              label: 'Beranda',
            },
            {
              path: '/klinik/klinik-rujukan',
              icon: faFileLines,
              label: 'Rujukan',
            },

            {
              path: '/Klinik/klinik-artikelKlinik',
              icon: faNewspaper,
              label: 'Artikel',
            },
            {
              path: '/klinik/klinik-profil',
              icon: faEnvelopesBulk,
              label: 'Profil',
            },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="btn btn-link"
              style={buttonStyle(isActive(item.path))}
            >
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-top">
          <button
            className="btn btn-link d-flex align-items-center text-danger w-100 text-start"
            style={{ textDecoration: 'none' }}
            onClick={Logout}
          >
            <svg
              aria-hidden="true"
              className="me-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      <main className="flex-grow-1 p-4 bg-light">{children}</main>
    </div>
  );
}

export default Sidebar;
