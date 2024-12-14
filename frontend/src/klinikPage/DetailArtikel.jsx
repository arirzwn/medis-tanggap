import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SidebarKlinik from '../components/sidebarKlinik';
import Artikel1 from '../images/artikel.png';

function DetailArtikel() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <SidebarKlinik>
        <div className="text-center">Loading...</div>
      </SidebarKlinik>
    );
  }

  return (
    <SidebarKlinik>
      <div className="h-100" style={{ minWidth: '1200px' }}>
        <div className="container">
          <section className="bg-light shadow-md">
            <h1 className="fw-bolder fs-3 text-center mt-4">{article.title || "Judul Artikel"}</h1>
            <img className="rounded mx-auto d-block mt-4 mb-4 artikel-detail-img" src={article.image || Artikel1} alt="" />
          </section>
          <section className="bg-light shadow-md">
            <div className="row">
              <div className="col-1" style={{ width: '50px' }}>
                <img className="artikel-detail-profil" src={Artikel1} alt="Profil Penulis" />
              </div>
              <div className="col-1" style={{ width: '110px' }}>
                <h3 className="fw-bolder artikel-detail-username">
                  {article.author || "Penulis Tidak Diketahui"}
                </h3>
              </div>
              <div className="col-4">
                <h3 className="artikel-detail-hari">
                  {new Date(article.date).toLocaleDateString() || "Tanggal Tidak Tersedia"}
                </h3>
              </div>
            </div>
            <div className="mt-3">
              <h2 className="fw-bolder fs-4 mb-4">{article.description || "Deskripsi Artikel"}</h2>
              <div className="fs-6 mb-3">{article.content || "Konten artikel tidak tersedia saat ini."}</div>
            </div>
          </section>
        </div>
      </div>
    </SidebarKlinik>
  );
}

export default DetailArtikel;
