import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebarKlinik';
import './klinikStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Rujukan() {
  const navigate = useNavigate();
  const [rujukanData, setRujukanData] = useState([]);

  useEffect(() => {
    getRujukanData();
  }, []);

  const getRujukanData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/rujukan');
      setRujukanData(response.data);
    } catch (error) {
      console.error('Error fetching rujukan data:', error);
    }
  };

  // Function to calculate age from birthday
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Sidebar>
        {/* <div className="h-100" style={{ minWidth: '1200px' }}> */}
          <div className="container-fluid">
            <div className="d-flex justify-content-between p-3">
              <h2>Data Rujukan</h2>
              <button
                onClick={() => {
                  navigate('/dashboard/rujukan/tambah-rujukan');
                }}
                className="btn btn-primary hover-button"
              >
                Buat Rujukan
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Pasien</th>
                    <th>Umur</th>
                    <th>Kelamin</th>
                    <th>Diagnosa</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {rujukanData.map((rujukan, index) => (
                    <tr key={rujukan.id}>
                      <td>{index + 1}</td>
                      <td>{rujukan.name_patient}</td>
                      <td>{calculateAge(rujukan.birthday_date)}</td>
                      <td>{rujukan.gender}</td>
                      <td>{rujukan.diagnosis}</td>
                      <td>{rujukan.description}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={async () => {
                            if (
                              window.confirm(
                                'Apakah anda yakin ingin menghapus rujukan ini?'
                              )
                            ) {
                              try {
                                await axios.delete(
                                  `http://localhost:5000/api/rujukan/${rujukan.id}`
                                );
                                getRujukanData();
                              } catch (error) {
                                console.error('Error deleting rujukan:', error);
                              }
                            }
                          }}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        {/* </div> */}
      </Sidebar>
    </>
  );
}

export default Rujukan;
