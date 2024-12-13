import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebarKlinik';
import "./klinikStyle.css";

function KlinikArtikel() {
    // Fungsi untuk menangani update artikel
    const handleUpdate = (id) => {
        console.log(`Update artikel dengan ID: ${id}`);
        // Tambahkan logika update di sini
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
                        <h2>Data Artikel</h2>
                        <button className="btn btn-primary hover-button">
                            Buat Artikel
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Author</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Arya</td>
                                    <td>19</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning btn-sm me-2" 
                                            onClick={() => handleUpdate(1)}
                                        >
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            onClick={() => handleDelete(1)}
                                        >
                                            Delete
                                        </button>
                                        {/* Tombol Lihat Detail */}
                                        <Link to={`/artikel/${1}`} className="btn btn-info btn-sm">
                                            Lihat Detail
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Siti</td>
                                    <td>25</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning btn-sm me-2" 
                                            onClick={() => handleUpdate(2)}
                                        >
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm me-2" 
                                            onClick={() => handleDelete(2)}
                                        >
                                            Delete
                                        </button>
                                        {/* Tombol Lihat Detail */}
                                        <Link to={`/artikel/${2}`} className="btn btn-info btn-sm">
                                            Lihat Detail
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

export default KlinikArtikel;
