// SelectCity.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCities } from "./ApiHospital";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const SelectCity = () => {
  const { provinceId } = useParams();
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getCities(provinceId);
      setCities(data);
    };
    fetchCities();
  }, [provinceId]);

  const handleSelect = (e) => {
    const cityId = e.target.value;
    if (cityId) {
      navigate(`/select-hospital/${provinceId}/${cityId}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="wrap-all-city">
        <div className="city-container">
          <div className="title-hospital">
            <h1>Pilih Kota/Kabupaten</h1>
          </div>
          <div className="city-cards">
            {cities.map((city) => (
              <div key={city.id} className="city-card">
                <h3>{city.name}</h3>
                <button
                  onClick={() => handleSelect({ target: { value: city.id } })}
                >
                  Pilih
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectCity;
