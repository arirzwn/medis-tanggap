import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Artikel1 from '../images/artikel.png';
import Artikel2 from '../images/artikel2.jpg';

function Detail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/articles/${id}`
      );
      setArticle(response.data);
      console.log('Article Data:', response.data); // Tambahkan log untuk memeriksa data yang diterima
    } catch (error) {
      console.error('There was an error fetching the article!', error);
    }
  };

  if (!article) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container">
        <section>
          <h1 className="fw-bolder fs-3 text-center mt-4">{article.title}</h1>
          <img
            className="rounded mx-auto d-block mt-4 mb-4 artikel-detail-img"
            src={Artikel2}
            alt=""
          />
        </section>
        <section>
          <div className="row">
            <div className="col-1" style={{ width: '50px' }}>
              <img className="artikel-detail-profil" src={Artikel1} alt="" />
            </div>
            <div className="col-1" style={{ width: '110px' }}>
              <h3 className="fw-bolder artikel-detail-username">
                {article.author}
              </h3>
            </div>
            <div className="col-1" style={{ width: '5px' }}>
              <h3 className="artikel-detail-hari">~</h3>
            </div>
            <div className="col-4">
              <h3 className="artikel-detail-hari">
                {new Date(article.date).toLocaleDateString()}
              </h3>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="fw-bolder fs-4 mb-4">{article.title}</h2>
            <h2 className="fs-6 mb-3">{article.description}</h2>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
