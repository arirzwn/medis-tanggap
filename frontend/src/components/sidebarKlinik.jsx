import React, { useState } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faNewspaper,
  faFileLines,
  faEnvelopesBulk,
  faUser,
  faHospital,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';
import axios from 'axios';
import Swal from 'sweetalert2';

function Sidebar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleLogout = async () => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Konfirmasi Logout',
      text: 'Apakah Anda yakin ingin keluar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Keluar',
      cancelButtonText: 'Batal',
    });

    // If user confirms
    if (result.isConfirmed) {
      try {
        const response = await axios.delete('http://localhost:5000/logout', {
          withCredentials: true,
        });

        if (response.status === 200) {
          localStorage.removeItem('userData');
          localStorage.removeItem('accessToken'); // Ubah 'token' menjadi 'accessToken'

          // Dispatch event untuk memberitahu navbar
          window.dispatchEvent(new Event('authChange'));

          Swal.fire({
            icon: 'success',
            title: 'Logout Berhasil',
            showConfirmButton: false,
            timer: 1500,
          });

          navigate('/');
        }
      } catch (error) {
        console.error('Logout error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Terjadi kesalahan saat logout',
        });
      }
    }
  };


  const sidebarStyle = {
    position: 'fixed', // Sidebar fixed
    top: 0, // Mulai dari atas
    left: 0, // Mulai dari sisi kiri
    width: '250px',
    height: '100vh', // Tinggi penuh viewport
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    color: '#343a40',
    zIndex: 1000, // Pastikan sidebar di atas elemen lainnya

  const mainStyle = {
    marginLeft: '250px', // Tambahkan margin kiri agar konten tidak menutupi sidebar
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh', // Pastikan main mengisi layar penuh

  };
  
  const mainStyle = {
    marginLeft: '250px', // Tambahkan margin kiri agar konten tidak menutupi sidebar
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh', // Pastikan main mengisi layar penuh
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="Logo" style={logoStyle} />

          </Link>
        </div>
        <nav
          className={`flex-grow-1 px-4 py-4 ${
            isNavOpen ? 'show' : ''
          } id="navbarNav"`}
        >
          {[
            {
              path: '/dashboard',
              icon: faHouse,
              label: 'Beranda',
            },
            {
              path: '/dashboard/rujukan',
              icon: faFileLines,
              label: 'Rujukan',
            },
            {
              path: '/dashboard/artikel',
              icon: faNewspaper,
              label: 'Artikel',
            },
            {
              path: '/dashboard/profile',
              icon: faHospital,
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
            onClick={handleLogout}
            className="btn btn-link d-flex align-items-center text-danger w-100 text-start"
            style={{ textDecoration: 'none' }}
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

      <main style={mainStyle}>{children}</main>
    </div>
  );
}

export default Sidebar;
