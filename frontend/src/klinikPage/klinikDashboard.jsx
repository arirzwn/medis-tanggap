import React, { useEffect, useState } from 'react';
import SidebarKlinik from '../components/sidebarKlinik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faFileLines } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct the import of jwtDecode
import { useNavigate } from 'react-router-dom';

function KlinikDashboard() {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
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
    } catch (error) {
      if (error.response) {
        navigate('/login');
      }
    }
  };

  return (
    <>
      <SidebarKlinik>
        <div className="w-100 h-100">
          <div className="mb-4">
            <h3 className="text-primary fw-bold">Selamat Datang</h3>
            <h5 className="text-muted">{name}</h5>
            <h5 className="fw-bold">Statistik</h5>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <div
              className="card p-4 text-start d-flex flex-column shadow-sm"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                width: '48%',
              }}
            >
              <FontAwesomeIcon
                className="icon mb-3"
                style={{ width: '30px', height: '30px', color: '#007bff' }}
                icon={faNewspaper}
              />
              <h5 className="card-title">10</h5>
              <p className="card-text">Artikel terbaru</p>
            </div>

            <div
              className="card p-4 text-start d-flex flex-column shadow-sm"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                width: '48%',
              }}
            >
              <FontAwesomeIcon
                className="icon mb-3"
                style={{ width: '30px', height: '30px', color: '#007bff' }}
                icon={faFileLines}
              />
              <h5 className="card-title">15</h5>
              <p className="card-text">Rujukan yang diterima</p>
            </div>
          </div>
        </div>
      </SidebarKlinik>
    </>
  );
}

export default KlinikDashboard;
