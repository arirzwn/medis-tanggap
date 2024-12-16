import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProvinces } from './ApiHospital'; // Fungsi untuk mengambil data dari database
import provincesData from './provinces.json'; // JSON dengan URL gambar
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './Hospital.css';

const SelectProvince = () => {
  const [provinces, setProvinces] = useState([]); // Data provinsi dari database
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setLoading(true);
        // Ambil data provinsi dari database
        const dbProvinces = await getProvinces();
        setProvinces(dbProvinces); // Set data provinsi
      } catch (error) {
        console.error('Error fetching provinces:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  // Fungsi navigasi saat provinsi dipilih
  const handleSelect = (provinceId) => {
    if (provinceId) {
      navigate(`/select-city/${provinceId}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="province-container">
        <h1>Pilih Provinsi</h1>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Memuat data provinsi...</p>
          </div>
        ) : (
          <div className="province-cards">
            {provinces.map((province, index) => (
              <div className="province-card" key={province.id}>
                <img
                  src={`${process.env.PUBLIC_URL}/${provincesData[index].imageUrl}`} // Mengambil gambar sesuai urutan
                  alt={province.name}
                  className="province-image"
                />
                <h3>{province.name}</h3>
                <button onClick={() => handleSelect(province.id)}>Pilih</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SelectProvince;
