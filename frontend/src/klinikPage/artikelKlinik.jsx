import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from '../components/sidebarKlinik';
import "./klinikStyle.css";

function KlinikArtikel() {
    const navigate = useNavigate()

    return (
        <>
            <Sidebar>
                <div className=" h-100" style={{minWidth: "1200px"}}>

                <div className="container-fluid">
                    <div className="d-flex justify-content-between p-3">
                        <h2>Data Artikel</h2>
                        {/* Tombol Buat Artikel */}
                        <Link to="/klinik/klinik-buat-artikel" className="btn btn-primary hover-button">
                            Buat Artikel
                        </Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Penulis</th>
                                    <th>Judul</th>
                                    <th>Deskripsi</th>
                                    <th>Waktu</th>
                                    <th>Aksi</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Siti</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>Selasa</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning btn-sm me-2" 
                                            onClick={() => navigate("/klinik/klinik-ubah-artikel")}
                                        >
                                            Ubah
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            // onClick={() => handleDelete(2)}
                                        >
                                            Hapus
                                        </button>
                                        <Link to={"/klinik/klinik-detail-artikel"} className="btn btn-info btn-sm">
                                            Lihat Detail
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                </div>
            </Sidebar>
        </>
    );
}

export default KlinikArtikel;
