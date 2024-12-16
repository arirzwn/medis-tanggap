import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebarAdmin';
import "./pengajuan-klinik.css";

function PengajuanKlinik() {
    // Fungsi untuk menangani Accept artikel
    const handleAccept = (id) => {
        console.log(`Accept artikel dengan ID: ${id}`);
        // Tambahkan logika Accept di sini
    };

    // Fungsi untuk menangani delete artikel
    const handleDelete = (id) => {
        console.log(`Delete artikel dengan ID: ${id}`);
        // Tambahkan logika delete di sini
    };
    return (
        <>
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
                                    <th>Diunggah</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Melati</td>
                                    <td>Jl. Pembangunan no. 10</td>
                                    <td>5 menit yang lalu</td>
                                    <td>
                                        <button 
                                            className="btn btn-success btn-sm me-2" 
                                            onClick={() => handleAccept(1)}
                                        >
                                            Terima
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            onClick={() => handleDelete(1)}
                                        >
                                            Hapus
                                        </button>
                                        <Link to={`detail-pengajuan/${1}`} className="btn btn-info btn-sm">
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mawar</td>
                                    <td>Jl. Pembangunan no. 10</td>
                                    <td>5 menit yang lalu</td>
                                    <td>
                                        <button 
                                            className="btn btn-success btn-sm me-2" 
                                            onClick={() => handleAccept(1)}
                                        >
                                            Terima
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            onClick={() => handleDelete(1)}
                                        >
                                            Hapus
                                        </button>
                                        <Link to={`detail-pengajuan/${1}`} className="btn btn-info btn-sm">
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Kamboja</td>
                                    <td>Jl. Pembangunan no. 10</td>
                                    <td>5 menit yang lalu</td>
                                    <td>
                                        <button 
                                            className="btn btn-success btn-sm me-2" 
                                            onClick={() => handleAccept(1)}
                                        >
                                            Terima
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            onClick={() => handleDelete(1)}
                                        >
                                            Hapus
                                        </button>
                                        <Link to={`detail-pengajuan/${1}`} className="btn btn-info btn-sm">
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default PengajuanKlinik;
