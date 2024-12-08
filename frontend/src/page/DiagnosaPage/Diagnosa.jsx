import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import BgDiagnosa from "../../images/bg-diagnosa.jpg";
import "./Diagnosa.css"; // Import file CSS

const Diagnosa = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-diagnosa">
        <div className="bg-image"></div>
        <div className="container">
          <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="wrap-output bg-white shadow p-4 ">
              <h4 class="text-center title-output fw-bold text-uppercase mb-5 ">
                Pilih sesuai dengan gejala yang di alami
              </h4>
              <div class="row">
                <div class="col-md-6">
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                </div>
                <div class="col-md-6">
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                </div>
                <div class="col-md-6">
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                </div>
                <div class="col-md-6">
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                  <label class="checkbox-btn w-100 mb-3">
                    <input type="checkbox" />
                    <span>Kepala Pusing</span>
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-4">
                <button class="btn btn-info text-white fw-bold px-4 py-3  w-100">
                  Diagnosa Penyakit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Diagnosa;
