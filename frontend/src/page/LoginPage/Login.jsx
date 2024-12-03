import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Tambahkan custom styling jika diperlukan
import Button from '../../components/Button'; // Import the new Button component
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="d-flex vh-100">
      {/* Bagian kiri */}
      <div className="bg-kiri text-white d-flex flex-column justify-content-center align-items-center w-50">
        <h1 className="mb-3 fw-bold text-custom-color-kiri">Welcome to</h1>
        <h1 className="mb-4 fw-bold">Medis Tanggap</h1>
        <Button
          className="btn btn-info text-white fw-bold px-4 py-2"
          onClick={navigateToRegister}
        >
          Register Account
        </Button>
      </div>

      {/* Bagian kanan */}
      <div className="d-flex flex-column justify-content-center align-items-center w-50">
        <h2 className="mb-3 text-custom-color fw-bold">Medis Tanggap</h2>
        <p className="mb-4 text-muted font-weight-bold">
          Login to your account
        </p>
        <form className="w-75">
          <div className="mb-3">
            {/* <label htmlFor="email" className="form-label font-weight-bold">
              Email
            </label> */}
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3 position-relative">
            {/* <label htmlFor="password" className="form-label font-weight-bold">
              Password
            </label> */}
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
              style={{ right: '10px' }}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <Button
            type="submit"
            className="btn button-color w-100 text-white  fw-bold hover:"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
