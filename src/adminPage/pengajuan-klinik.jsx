import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebarAdmin';
import './pengajuan-klinik.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function PengajuanKlinik() {
  const [clinics, setClinics] = useState([]);

  // Fetch data klinik dari backend
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clinics');
        setClinics(response.data.data);
      } catch (error) {
        console.error('Error fetching clinics:', error);
      }
    };

    fetchClinics();
  }, []);

  // Fungsi untuk menangani Accept klinik
  const handleAccept = async (id) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Menerima klinik ini menjadi clinic!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, terima!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/clinics/accept/${id}`
        );
        if (response.status >= 200 && response.status < 300) {
          Swal.fire('Berhasil!', 'Klinik berhasil diterima.', 'success');
          setClinics(clinics.filter((clinic) => clinic.id !== id)); // Hapus klinik yang diterima
        }
      } catch (error) {
        console.error('Error accepting clinic:', error);
        Swal.fire('Gagal!', 'Terjadi kesalahan saat menerima klinik.', 'error');
      }
    }
  };

  // Fungsi untuk menangani Delete klinik
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Klinik ini akan dihapus tanpa dikembalikan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/clinics/reject/${id}`
        );
        if (response.status >= 200 && response.status < 300) {
          Swal.fire(
            'Dihapus!',
            'Klinik berhasil ditolak dan dihapus.',
            'success'
          );
          setClinics(clinics.filter((clinic) => clinic.id !== id)); // Hapus klinik yang dihapus
        }
      } catch (error) {
        console.error('Error deleting clinic:', error);
        Swal.fire(
          'Gagal!',
          'Terjadi kesalahan saat menghapus klinik.',
          'error'
        );
      }
    }
  };

  return (
    <Sidebar>
      <div className="container-fluid">
        <div className="d-flex justify-content-between p-3">
          <h2>Daftar Data Pengajuan Klinik</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>File KTP</th>
                <th>Surat Jalan</th>
                <th>Diunggah</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((clinic, index) => (
                <tr key={clinic.id}>
                  <td>{index + 1}</td>
                  <td>{clinic.clinic_name}</td>
                  <td>{clinic.address}</td>
                  <td>
                    <a
                      href={`http://localhost:5000/uploads/${clinic.ktp_owner}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Lihat KTP
                    </a>
                  </td>
                  <td>
                    <a
                      href={`http://localhost:5000/uploads/${clinic.operation_license}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Lihat Surat Jalan
                    </a>
                  </td>
                  <td>
                    {new Date(clinic.createdAt).toLocaleString('id-ID', {
                      timeZone: 'Asia/Jakarta',
                      hour12: false,
                    })}
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAccept(clinic.id)}
                    >
                      Terima
                    </button>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDelete(clinic.id)}
                    >
                      Tolak
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
  );
}

export default PengajuanKlinik;
