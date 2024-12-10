import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Artikel1 from '../images/artikel.png';
import Artikel2 from '../images/artikel2.jpg';

function Artikel() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('There was an error fetching the articles!', error);
    }
  };

  const latestArticle =
    articles.length > 0 ? articles[articles.length - 1] : null;
  const otherArticles = articles.slice(0, articles.length - 1);

  return (
    <>
      <Navbar />
      <div className="container align-items-center">
        <section className="h-100 p-2 text-white">
          <div className="artikel-tagline">
            <h3 className="fw-bolder fst-italic fs-4 m-4">
              Kesehatan adalah aset berharga, jaga hari ini untuk hidup yang
              lebih baik esok.
            </h3>
          </div>
        </section>
        {latestArticle && (
          <section>
            <div className="row m-2" key={latestArticle.id}>
              <div className="col">
                <Link
                  to={`/artikel-detail/${latestArticle.id}`}
                  className="text-decoration-none text-dark"
                >
                  <img className="artikel-img" src={Artikel2} alt="" />
                </Link>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-1">
                    <img className="artikel-profil" src={Artikel1} alt="" />
                  </div>
                  <div className="col-1" style={{ width: '110px' }}>
                    <h3 className="fw-bolder artikel-username">
                      {latestArticle.author}
                    </h3>
                  </div>
                  <div className="col-1" style={{ width: '5px' }}>
                    <h3 className="hari">~</h3>
                  </div>
                  <div className="col-4">
                    <h3 className="hari">
                      {new Date(latestArticle.date).toLocaleDateString()}
                    </h3>
                  </div>
                </div>
                <div className="mt-3">
                  <h2 className="fw-bolder fs-4">
                    <Link
                      to={`/artikel-detail/${latestArticle.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {latestArticle.title}
                    </Link>
                  </h2>
                  <h2 className="fs-6">{latestArticle.description}</h2>
                  <button
                    className="btn btn-brand text-light mt-3 fw-semibold"
                    onClick={() => {
                      navigate(`/artikel-detail/${latestArticle.id}`);
                    }}
                  >
                    Baca Sekarang
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
        <section style={{ margin: '18px' }}>
          <h2 className="fw-bolder fs-4 mb-3 mt-5">Artikel Lainnya</h2>
          <div className="row">
            {otherArticles.map((article) => (
              <div className="col" key={article.id}>
                <img className="artikel-mini-img" src={Artikel2} alt="" />
                <div className="row">
                  <div className="col-1">
                    <img
                      className="artikel-mini-profil"
                      src={Artikel1}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <h3 className="fw-bold artikel-mini-username">
                      {article.author}
                    </h3>
                    <h3 className="artikel-mini-hari">
                      {new Date(article.date).toLocaleDateString()}
                    </h3>
                  </div>
                </div>
                <h2 className="fw-semibold fs-6 mb-3 mt-2">{article.title}</h2>
                <h2 className="fw-lighter fs-6">{article.description}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Artikel;
