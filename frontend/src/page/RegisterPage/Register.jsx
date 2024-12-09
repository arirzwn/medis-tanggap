import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';
import Button from '../../components/Button';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [msg, setMsg] = useState('');

  const navigateToLogin = () => {
    navigate('/login');
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        phone: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      Swal.fire({
        icon: 'success',
        title: 'Account Created',
        text: 'Your account has been successfully created. You will be redirected to the login page shortly.',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.msg,
        });
      }
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Bagian kiri */}
      <div className="d-flex flex-column justify-content-center align-items-center w-50">
        <h2 className="mb-3 text-custom-color fw-bold">Medis Tanggap</h2>
        <p className="mb-4 text-muted">Create your account</p>
        <form className="w-75" onSubmit={register}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="No. HP"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
