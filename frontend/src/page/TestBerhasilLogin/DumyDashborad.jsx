import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const DumyDashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token', {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);

      console.log(decoded);
    } catch (error) {}
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
              <strong>Name:</strong> User Name
            </p>
            <p className="mb-2">
              <strong>Email:</strong> user@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 08123456789
            </p>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DumyDashboard;
