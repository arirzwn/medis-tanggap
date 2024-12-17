import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebarAdmin";
import "./detail-klinik.css";
import image_ktp from "../images/artikel.png";
import image_surat from "../images/artikel2.jpg";

function DetailPengajuan() {
    const [showModal, setShowModal] = useState(false); 
    const [showReasonModal, setShowReasonModal] = useState(false); 
    const [reason, setReason] = useState(""); 
    const [imageToShow, setImageToShow] = useState(null); 

    const detailData = {
        namaKlinik: "Klinik Sehat Selalu",
        alamat: "Jl. Sehat No. 123, Jakarta",
        ktpPemilik: image_ktp, 
        suratIzin: image_surat, 
        createdAt: "2024-12-15",
    };

    // Fungsi untuk menampilkan modal dengan gambar
    const handleImageClick = (image) => {
        setImageToShow(image); 
        setShowModal(true); 
    };

    // Fungsi untuk menutup modal gambar
    const closeModal = () => {
        setShowModal(false); 
        setImageToShow(null); 
    };

    // Fungsi untuk menangani penerimaan
    const handleTerima = () => {
        alert("Pengajuan Diterima");
    };

    // Fungsi untuk menangani penolakan, menampilkan modal alasan
    const handleTolak = () => {
        setShowReasonModal(true); 
    };

    // Fungsi untuk menutup modal alasan
    const closeReasonModal = () => {
        setShowReasonModal(false); 
    };

    // Fungsi untuk mengirim alasan penolakan
    const handleSubmitReason = () => {
        alert(`Pengajuan Ditolak. Alasan: ${reason}`);
        setShowReasonModal(false); 
    };

    return (
        <>
            <Sidebar>
                <div className="container mt-4">
                    <h2 className="mb-4">Detail Pengajuan Klinik</h2>
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-borderless table2">
                                <tbody>
                                    <tr>
                                        <th>Nama Klinik</th>
                                        <td>{detailData.namaKlinik}</td>
                                    </tr>
                                    <tr>
                                        <th>Alamat</th>
                                        <td>{detailData.alamat}</td>
                                    </tr>
                                    <tr>
                                        <th>KTP Pemilik</th>
                                        <td>
                                            <img
                                                src={detailData.ktpPemilik}
                                                alt="KTP Pemilik"
                                                style={{ width: "150px", height: "auto", cursor: "pointer" }}
                                                onClick={() => handleImageClick(detailData.ktpPemilik)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Surat Izin</th>
                                        <td>
                                            <img
                                                src={detailData.suratIzin}
                                                alt="Surat Izin"
                                                style={{ width: "150px", height: "auto", cursor: "pointer" }}
                                                onClick={() => handleImageClick(detailData.suratIzin)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Created At</th>
                                        <td>{detailData.createdAt}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <button onClick={handleTerima} className="btn btn-success me-2">
                            Terima
                        </button>
                        <button onClick={handleTolak} className="btn btn-danger me-2">
                            Tolak
                        </button>
                        <Link to="/admin/pengajuan" className="btn btn-info">
                            Kembali
                        </Link>
                    </div>
                </div>
            </Sidebar>

            {/* Modal untuk gambar */}
            {showModal && (
                <div
                    className="modal show"
                    tabIndex="-1"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={closeModal}
                >
                    <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body d-flex justify-content-center align-items-center">
                                <img
                                    src={imageToShow}
                                    alt="Enlarged"
                                    className="img-fluid"
                                    style={{ maxHeight: "80vh", objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tampilan untuk alasan penolakan */}
            {/* {showReasonModal && (
                <div
                    className="modal show"
                    tabIndex="-1"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={closeReasonModal}
                >
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Alasan Penolakan</h5>
                                <button type="button" className="btn-close" onClick={closeReasonModal}></button>
                            </div>
                            <div className="modal-body">
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="Masukkan alasan penolakan"
                                    className="form-control"
                                    rows="4"
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={handleSubmitReason}>
                                    Kirim Alasan
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={closeReasonModal}>
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </>
    );
}

export default DetailPengajuan;
