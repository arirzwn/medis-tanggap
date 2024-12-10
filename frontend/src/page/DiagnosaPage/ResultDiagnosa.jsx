import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./ResultDiagnosa.css";

const ResultDiagnosa = () => {
  const { state } = useLocation();
  const [result, setResult] = useState(null);
  const resultId = state?.resultId; // Ambil resultId dari state
  const selectedSymptoms = state?.selectedSymptoms || []; // Gejala yang dipilih

  // Fetch hasil berdasarkan resultId
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/results/${resultId}`
        );
        if (!response.ok) {
          throw new Error("Terjadi kesalahan pada server");
        }
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching result:", error);
        setResult(null); // Agar tampil pesan error jika gagal mengambil data
      }
    };

    if (resultId) {
      fetchResult();
    }
  }, [resultId]);

  return (
    <div>
      <Navbar />
      <div className="wrap-result-diagnosa">
        <div className="bg-image"></div>
        <div className="container py-5">
          <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="wrap-output bg-white shadow p-4 rounded">
              {result ? (
                <>
                  <h4 className="text-center title-output fw-bold text-uppercase mb-4">
                    HASIL PENYAKIT
                  </h4>
                  <div className="mb-4">
                    <h5 className="fw-bold">Diagnosa Penyakit</h5>
                    <p
                      className="text-white p-2 rounded"
                      style={{ backgroundColor: "#47ABC1" }}
                    >
                      {result.disease || "Nama Penyakit"}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold">Penjelasan</h5>
                    <div
                      className="text-white p-3 rounded"
                      style={{ backgroundColor: "#47ABC1" }}
                    >
                      <p>{result.explanation || "Penjelasan tidak tersedia"}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold">Cara Pengobatan</h5>
                    <div
                      className="text-white p-3 rounded"
                      style={{ backgroundColor: "#47ABC1" }}
                    >
                      <p>{result.treatment || "Pengobatan tidak tersedia"}</p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-center">Tidak ada hasil yang sesuai.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultDiagnosa;
