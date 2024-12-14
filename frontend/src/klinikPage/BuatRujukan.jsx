import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SidebarKlinik from '../components/sidebarKlinik';

function BuatRujukan() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name_patient: '',
    gender: 'male',
    birthday_date: '',
    diagnosis: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/rujukan', formData);
      alert('Rujukan berhasil dibuat!');
      navigate('/dashboard/rujukan');
    } catch (error) {
      console.error('Error creating rujukan:', error);
      alert('Gagal membuat rujukan. Silakan coba lagi.');
    }
  };

  return (
    <SidebarKlinik>
      <div className="h-100" style={{ minWidth: '1200px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3>Buat Rujukan</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="name_patient" className="form-label">
              Nama Pasien
            </label>
            <input
              type="text"
              className="form-control"
              id="name_patient"
              name="name_patient"
              value={formData.name_patient}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Jenis Kelamin
            </label>
            <select
              name="gender"
              id="gender"
              className="form-control"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="birthday_date" className="form-label">
              Tanggal Lahir
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday_date"
              name="birthday_date"
              value={formData.birthday_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diagnosis" className="form-label">
              Diagnosa
            </label>
            <input
              type="text"
              className="form-control"
              id="diagnosis"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Keterangan
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Konfirmasi
          </button>
        </form>
      </div>
    </SidebarKlinik>
  );
}

export default BuatRujukan;
