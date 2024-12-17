import React, { useState } from "react";
import Sidebar from "../components/sidebarAdmin";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"; 
import "./detail-klinik.css";

function DetailKlinik() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const detailData = {
        nama: "Klinik Sehat Selalu",
        telepon: "081234567890",
        email: "kliniksehat@email.com",
        password: "passwordRahasia", // Password asli
        createdAt: "2024-12-15",
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleHapus = () => {
        alert("Klinik Dihapus");
    };

    return (
        <>
            <Sidebar>
                <div className="container mt-4">
                    <h2 className="mb-4">Detail Data Klinik</h2>
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-borderless table2">
                                <tbody>
                                    <tr>
                                        <th>Nama</th>
                                        <td>{detailData.nama}</td>
                                    </tr>
                                    <tr>
                                        <th>Telepon</th>
                                        <td>{detailData.telepon}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{detailData.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Password</th>
                                        <td className="position-relative">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    {isPasswordVisible
                                                        ? detailData.password
                                                        : "******"}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                    className="btn btn-link position-absolute end-0"
                                                    style={{ textDecoration: "none", background: "transparent", right: '10px' }}
                                                >
                                                    {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                                </button>
                                            </div>
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
                        <button onClick={handleHapus} className="btn btn-danger me-2">
                            Hapus
                        </button>
                        <Link to="/admin/daftar-klinik" className="btn btn-info">
                            Kembali
                        </Link>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default DetailKlinik;
