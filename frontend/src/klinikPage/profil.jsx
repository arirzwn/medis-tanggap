import React, { useEffect, useState } from "react";
import SidebarKlinik from "../components/sidebarKlinik";
import Logo from "../images/logo.png";
import axios from "axios";

function Profil() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [image, setImage] = useState(null);

  const userId = JSON.parse(localStorage.getItem("userData"))?.id;

  useEffect(() => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      axios
        .get(`http://localhost:5000/users/clinic/${userId}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("email", userData.email); // Menambahkan email
    if (image) {
      formData.append("images", image);
    }

    try {
      const token = localStorage.getItem("accessToken");

      const response = await axios.put(
        "http://localhost:5000/profile/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data) {
        alert("Profile updated successfully!");
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to update profile");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <SidebarKlinik>
      <div className="h-100">
        <div className="container bg-white p-4 shadow-sm rounded">
          <h4 className="mb-4 fw-bold">Form Data Pengguna</h4>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-bold">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={userData.email} // Menambahkan value email
                  onChange={handleChange}
                  placeholder="Masukkan email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label fw-bold">
                  Telepon
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="images" className="form-label fw-bold">
                  Gambar (Opsional)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="images"
                  name="images"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </SidebarKlinik>
  );
}

export default Profil;
