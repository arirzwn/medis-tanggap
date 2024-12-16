import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarKlinik from '../components/sidebarKlinik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faFileLines } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function KlinikDashboard() {
  const [userData, setUserData] = useState({
    name: 'Loading...',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const storedUserData = localStorage.getItem('userData');

        if (!accessToken) {
          navigate('/login');
          return;
        }

        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          if (userData.role === 'admin') {
            navigate('/admin/dashboard');
            return;
          }
          setUserData(userData);
        }

        const response = await axios.get('http://localhost:5000/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userData');
          navigate('/login');
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <>
      <SidebarKlinik>
        <div className="h-100" style={{ minWidth: '1200px' }}>
          <div className="mb-4">
            <h3 className="text-primary fw-bold">Selamat Datang</h3>
            <h5 className="text-muted">{userData.name}</h5>
            <h2 className="fw-bold">Statistik</h2>
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
