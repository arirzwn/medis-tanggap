import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./Clinic.css";

const Clinic = () => {
  const [ktpFile, setKtpFile] = useState(null);
  const [izinFile, setIzinFile] = useState(null);

  // Fungsi untuk menangani file drop
  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
    }
  };

  // Fungsi untuk menangani perubahan input file
  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="wrap-clinic d-flex justify-content-center align-items-center">
        <div
          className="card p-4 shadow"
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <h3 className="text-center mb-4">Form Pendaftaran Klinik</h3>
          <form>
            {/* Nama Klinik */}
            <div className="mb-3">
              <label htmlFor="clinicName" className="form-label">
                Nama Klinik
              </label>
              <input
                type="text"
                id="clinicName"
                className="form-control"
                placeholder="Masukkan nama klinik"
              />
            </div>

            {/* Alamat */}
            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">
                Alamat Klinik
              </label>
              <textarea
                id="alamat"
                className="form-control"
                placeholder="Masukkan alamat lengkap"
                rows="3"
              ></textarea>
            </div>

            {/* Upload Gambar KTP */}
            <div
              className="upload-area mb-3"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, setKtpFile)}
            >
              <label htmlFor="ktpUpload" className="form-label">
                Upload Gambar KTP Penanggung Jawab
              </label>
              <div className="drag-drop">
                <input
                  type="file"
                  id="ktpUpload"
                  className="file-input"
                  onChange={(e) => handleFileChange(e, setKtpFile)}
                />
                <div className="drag-area">
                  {ktpFile
                    ? `File Selected: ${ktpFile.name}`
                    : "Drag and drop file here or click to upload"}
                </div>
              </div>
            </div>

            {/* Upload Gambar Surat Izin */}
            <div
              className="upload-area mb-3"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, setIzinFile)}
            >
              <label htmlFor="suratIzinUpload" className="form-label">
                Upload Gambar Surat Izin Operasi
              </label>
              <div className="drag-drop">
                <input
                  type="file"
                  id="suratIzinUpload"
                  className="file-input"
                  onChange={(e) => handleFileChange(e, setIzinFile)}
                />
                <div className="drag-area">
                  {izinFile
                    ? `File Selected: ${izinFile.name}`
                    : "Drag and drop file here or click to upload"}
                </div>
              </div>
            </div>

            {/* Tombol Kirim */}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary w-100">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clinic;
