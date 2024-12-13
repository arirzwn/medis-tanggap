import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Navigate, useNavigate } from 'react-router-dom';

const DumyDashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [token, setToken] = useState('');
  // const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);

      setName(decoded.name);
      setEmail(decoded.email);
      setTelephone(decoded.phone);
      // setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        // navigate.push('/login');
      }
    }
  };

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="h3">Dashboard</h1>
        </div>
        <div className="card-body">
          <div className="user-info mb-4">
            <p className="mb-2">
              <strong>Name:</strong> {name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {telephone}
            </p>
          </div>
          <button className="btn btn-danger" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DumyDashboard;
