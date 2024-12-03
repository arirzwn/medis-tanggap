import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Button from '../../components/Button';

const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="d-flex vh-100">
      {/* Bagian kiri */}
      <div className="d-flex flex-column justify-content-center align-items-center w-50">
        <h2 className="mb-3 text-custom-color fw-bold">Medis Tanggap</h2>
        <p className="mb-4 text-muted">Create your account</p>
        <form className="w-75">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="No. HP"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <Button
            type="submit"
            className="btn button-color w-100 text-white  fw-bold hover:"
          >
            Sign Up
          </Button>
        </form>
      </div>

      {/* Bagian kanan */}
      <div className="bg-kanan  text-white d-flex flex-column justify-content-center align-items-center w-50">
        <h1 className="mb-3 fw-bold font-welcome">Welcome to</h1>
        <h1 className="mb-4 fw-bold">Medis Tanggap</h1>
        <button
          className="btn btn-info text-white fw-bold px-4 py-2"
          onClick={navigateToLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
