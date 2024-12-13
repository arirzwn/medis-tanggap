import React from "react";
import SidebarKlinik from '../components/sidebarKlinik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faFileLines } from '@fortawesome/free-solid-svg-icons';

function KlinikDashboard() {
    return (
        <>
            <SidebarKlinik>
                <div className="w-100 h-100">
                    <div className="mb-4">
                        <h3 className="text-primary">Selamat Datang</h3>
                        <h5 className="text-muted">Medis Tanggap</h5>
                        <h2>Statistik</h2>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                        <div className="card p-4 text-start d-flex flex-column shadow-sm" style={{ backgroundColor: '#fff', borderRadius: '15px', width: '48%' }}>
                            <FontAwesomeIcon className="icon mb-3" style={{ width: "30px", height: "30px", color: '#007bff' }} icon={faNewspaper} />
                            <h5 className="card-title">10</h5>
                            <p className="card-text">Artikel terbaru</p>
                        </div>

                        <div className="card p-4 text-start d-flex flex-column shadow-sm" style={{ backgroundColor: '#fff', borderRadius: '15px', width: '48%' }}>
                            <FontAwesomeIcon className="icon mb-3" style={{ width: "30px", height: "30px", color: '#007bff' }} icon={faFileLines} />
                            <h5 className="card-title">15</h5>
                            <p className="card-text">Rujukan yang diterima</p>
                        </div>
                    </div>
                </div>
            </SidebarKlinik>
        </>
    );
}

export default KlinikDashboard;
