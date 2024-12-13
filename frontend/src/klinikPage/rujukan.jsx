import React from "react";
import Sidebar from '../components/sidebarKlinik';
import "./klinikStyle.css";

function Rujukan() {
    return (
        <>
            <Sidebar>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between p-3">
                        <h2>Data Rujukan</h2>
                        <button className="btn btn-primary hover-button">
                            Buat Rujukan
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Umur</th>
                                    <th>Telepon</th>
                                    <th>Kelamin</th>
                                    <th>Rumah Sakit Rujukan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Arya</td>
                                    <td>19</td>
                                    <td>0812589</td>
                                    <td>Pria</td>
                                    <td>RSUD Palangkaraya</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Siti</td>
                                    <td>25</td>
                                    <td>0823456</td>
                                    <td>Wanita</td>
                                    <td>RS Siloam</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Rahman</td>
                                    <td>30</td>
                                    <td>0835678</td>
                                    <td>Pria</td>
                                    <td>RS Hermina</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default Rujukan;
