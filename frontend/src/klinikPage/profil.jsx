import React from "react";
import SidebarKlinik from "../components/sidebarKlinik";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFileLines } from "@fortawesome/free-solid-svg-icons";

function Profil() {
  return (
    <>
      <SidebarKlinik>
        <div className="w-100 h-100">
          {/* Header */}
          <div className="bg-light row align-items-center shadow-sm mb-5 p-3 w-100">
            <div className="col-md-3">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="col-md-9">
              <h3 className="fw-bold">Medis Tanggap</h3>
              <div className="row">
                <div className="col-md-2">
                  <h6>Alamat</h6>
                  <h6>Telepon</h6>
                  <h6>Email</h6>
                </div>
                <div className="col-md-10">
                  <h6>Jl. Seth Adji</h6>
                  <h6>+62 12345678</h6>
                  <h6>noreply@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Konten Utama */}
          <div className="bg-light row shadow-sm p-3 w-100 justify-content-between">
            <div className="col-md-5 p-3">
              <div>
                <h4 className="fw-bold mt-3">Grup 1</h4>
                <h6>Data 1</h6>
                <h6>Data 2</h6>
                <h6>Data 3</h6>
              </div>
            </div>
            {/* Card Kedua */}
            <div className="col-md-5 p-3 position-relative">
              <button
                className="btn position-absolute"
                style={{
                  top: "10px",
                  right: "10px",
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <div>
                <h4 className="fw-bold mt-3">Grup 2</h4>
                <h6>Data 1</h6>
                <h6>Data 2</h6>
                <h6>Data 3</h6>
              </div>
            </div>
          </div>
        </div>
      </SidebarKlinik>
    </>
  );
}

export default Profil;
