// SelectBed.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBedDetail } from "./ApiHospital";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const SelectBed = () => {
  const { hospitalId } = useParams();
  const [beds, setBeds] = useState([]);

  useEffect(() => {
    const fetchBedDetails = async () => {
      const data = await getBedDetail(hospitalId, 2); // Fetch non-COVID beds
      if (data && Array.isArray(data.bedDetail)) {
        setBeds(data.bedDetail);
      } else {
        setBeds([]);
      }
    };
    fetchBedDetails();
  }, [hospitalId]);

  return (
    <div>
      <Navbar />
      <div className="wrap-bed">
        <div className="title-bed">
          <h1>Kapasitas Kasur</h1>
        </div>
        {beds.length > 0 ? (
          <div className="table-responsive">
            <table className="bed-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Ruang</th>
                  <th>Kapasitas Tersedia</th>
                </tr>
              </thead>
              <tbody>
                {beds.map((bed, index) => {
                  const totalBeds =
                    bed.stats.bed_available + bed.stats.bed_empty; // Calculate total beds
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{bed.stats.title}</td>
                      <td>
                        Tersedia: {bed.stats.bed_empty} dari {totalBeds}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Data kapasitas kasur tidak tersedia atau belum dipilih.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SelectBed;
