import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'; // Pastikan path logo benar

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      setIsAuthenticated(!!token);
    };

    // Check saat komponen dimount
    checkAuth();

    // Listen untuk event storage
    const handleStorageChange = (e) => {
      if (e.key === 'accessToken') {
        checkAuth();
      }
    };

    // Listen untuk custom event auth
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
        </a>
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/diagnosa">
                Diagnosa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artikel">
                Artikel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rumah-sakit">
                Rumah Sakit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pengajuan">
                Daftar Klinik
              </a>
            </li>
          </ul>
          {/* Conditional rendering of Login/Dashboard button */}
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn btn-brand text-light">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-brand text-light">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
