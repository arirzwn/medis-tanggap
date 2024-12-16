import React from "react";
import SidebarAdmin from '../components/sidebarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faFileLines, faHospital } from '@fortawesome/free-solid-svg-icons';
import './adminDashboard.css';

function AdminDashboard() {
    return (
        <>
            <SidebarAdmin>
                <div className="w-100 h-100">
                    <div className="mb-4">
                        <h3 className="text-primary fw-bold">Selamat Datang</h3>
                        <h5 className="text-muted">Medis Tanggap</h5>
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                        <div className="card1 p-4 text-start d-flex flex-column shadow-sm hover-card1">
                            <FontAwesomeIcon className="icon mb-3" style={{ width: "30px", height: "30px" }} icon={faFileLines} />
                            <h5 className="card1-title">10</h5>
                            <p className="card1-text">Daftar pengajuan klinik</p>
                        </div>

                        <div className="card1 p-4 text-start d-flex flex-column shadow-sm hover-card1">
                            <FontAwesomeIcon className="icon mb-3" style={{ width: "30px", height: "30px"}} icon={faHospital} />
                            <h5 className="card1-title">15</h5>
                            <p className="card1-text">Daftar Klinik</p>
                        </div>
                    </div>
                </div>
            </SidebarAdmin>
        </>
    );
}

export default AdminDashboard;
