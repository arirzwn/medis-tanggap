import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarKlinik from "../components/sidebarKlinik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faFileLines,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Logo from "../images/logo.png";
import "./klinikDashboard.css";

const KlinikDashboard = () => {
  const [userData, setUserData] = useState({});
  const userId = JSON.parse(localStorage.getItem("userData"))?.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        console.log(response.data); // Periksa data yang diterima dari server
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <>
      <SidebarKlinik>
        <div className="w-100 h-100">
          <div className="mb-4">
            <h3 className="text-primary fw-bold">Selamat Datang</h3>
            <h5 className="text-muted">{userData.name}</h5>
            <div className="h-100" style={{ minWidth: "1200px" }}>
              {/* Header */}
              <div className="bg-light row align-items-center shadow-sm mb-5 p-3 w-100">
                <div className="col-md-3 img-profile-dashboard">
                  <img
                    src={`http://localhost:5000/uploads/${userData.images}`}
                    alt={userData.images} // Tanpa tanda kutip di dalam {}
                  />
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-2">
                      <h6>Nama</h6>
                      <h6>Telepon</h6>
                      <h6>Email</h6>
                    </div>
                    <div className="col-md-10">
                      <h6>{userData.name}</h6>
                      <h6>{userData.phone}</h6>
                      <h6>{userData.email}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="fw-bold">Statistik</h2>
          </div>
          <div className="d-flex gap-5">
            <div className="card1 p-4 text-start d-flex flex-column shadow-sm hover-card1">
              <FontAwesomeIcon
                className="icon mb-3"
                style={{ width: "30px", height: "30px" }}
                icon={faFileLines}
              />
              <h5 className="card1-title">10</h5>
              <p className="card1-text">Artikel Terbaru</p>
            </div>

            <div className="card1 p-4 text-start d-flex flex-column shadow-sm hover-card1">
              <FontAwesomeIcon
                className="icon mb-3"
                style={{ width: "30px", height: "30px" }}
                icon={faHospital}
              />
              <h5 className="card1-title">15</h5>
              <p className="card1-text">Rujukan Yang Diterima</p>
            </div>
          </div>
        </div>
      </SidebarKlinik>
    </>
  );
};

export default KlinikDashboard;
