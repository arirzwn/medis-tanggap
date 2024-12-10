import React from 'react';
import './ResultDiagnosa.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const ResultDiagnosa = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-result-diagnosa">
        <div className="bg-image"></div>
        <div className="container py-5">
          <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="wrap-output bg-white shadow p-4 rounded">
              <h4 className="text-center title-output fw-bold text-uppercase mb-4">
                HASIL PENYAKIT
              </h4>
              <div className="mb-4">
                <h5 className="fw-bold">Diagnosa Penyakit</h5>
                <p
                  className="text-white p-2 rounded"
                  style={{ backgroundColor: '#47ABC1' }}
                >
                  Darah Tinggi Yang Berlebihan
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Cara Pencegahan</h5>
                <div
                  className="text-white p-3 rounded"
                  style={{ backgroundColor: '#47ABC1' }}
                >
                  <ul className="list-unstyled">
                    <li>
                      <strong>Pola Makan Sehat:</strong> Kurangi garam (maks.
                      1.500 mg/hari), perbanyak sayur, buah, biji-bijian, dan
                      protein tanpa lemak. Hindari makanan olahan tinggi lemak
                      jenuh/trans.
                    </li>
                    <li className="mt-2">
                      <strong>Menjaga Berat Badan:</strong> Pertahankan berat
                      badan ideal, karena kelebihan berat badan meningkatkan
                      risiko hipertensi. Penurunan berat badan dapat membantu
                      menurunkan tekanan darah.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Cara Pengobatan</h5>
                <div
                  className="text-white p-3 rounded"
                  style={{ backgroundColor: '#47ABC1' }}
                >
                  <ul className="list-unstyled">
                    <li>
                      <strong>Pola Makan Sehat:</strong> Kurangi garam (maks.
                      1.500 mg/hari), perbanyak sayur, buah, biji-bijian, dan
                      protein tanpa lemak. Hindari makanan olahan tinggi lemak
                      jenuh/trans.
                    </li>
                    <li className="mt-2">
                      <strong>Menjaga Berat Badan:</strong> Pertahankan berat
                      badan ideal, karena kelebihan berat badan meningkatkan
                      risiko hipertensi. Penurunan berat badan dapat membantu
                      menurunkan tekanan darah.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultDiagnosa;
