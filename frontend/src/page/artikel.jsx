import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './artikel.css';

const DEFAULT_AVATAR =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
const DEFAULT_ARTICLE_IMAGE =
  'https://via.placeholder.com/800x400?text=No+Image+Available';

// Custom styles
const imgStyles = {
  articleImg: {
    width: '500px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  miniImg: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const extractFirstImage = (content) => {
    if (!content) return null;
    const div = document.createElement('div');
    div.innerHTML = content;
    const img = div.querySelector('img');
    return img ? img.src : null;
  };

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/articles');
      if (response.data) {
        const processedArticles = response.data.map((article) => ({
          ...article,
          previewImage: extractFirstImage(article.content),
        }));
        const sortedArticles = processedArticles.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setArticles(sortedArticles);
      }
    } catch (err) {
      setError('Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const latestArticle = articles[0] || null;
  const otherArticles = articles.slice(1);

  return (
    <>
      <Navbar />
      <div className="container align-items-center">
        <section className="h-100 p-2 text-white artikel-tagline">
          <div style={{ backgroundColor: '#0a192f' }}>
            <h3 className="fw-bolder fst-italic fs-4 m-4">
              Kesehatan adalah aset berharga, jaga hari ini untuk hidup yang lebih baik esok.
            </h3>
          </div>
        </section>

        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger m-4">{error}</div>
        ) : articles.length === 0 ? (
          <div className="text-center m-4">Tidak ada artikel tersedia</div>
        ) : (
          <>
            <section>
              {latestArticle && (
                <div className="row m-2">
                  <div className="col">
                    <Link
                      to={`/artikel-detail/${latestArticle.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {latestArticle.previewImage ? (
                        <img
                          style={imgStyles.articleImg}
                          src={latestArticle.previewImage}
                          alt={latestArticle.title}
                        />
                      ) : (
                        <div
                          style={imgStyles.articleImg}
                          className="bg-light d-flex align-items-center justify-content-center"
                        >
                          <span className="text-muted">No image available</span>
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-1">
                        <img
                          className="artikel-profil"
                          src={DEFAULT_AVATAR}
                          alt="Author"
                        />
                      </div>
                      <div className="col">
                        <h3 className="artikel-username mb-0">
                          {latestArticle.author}
                        </h3>
                        <span className="text-muted">
                          {new Date(latestArticle.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h2 className="fs-4">
                        <Link
                          to={`/artikel-detail/${latestArticle.id}`}
                          className="text-decoration-none"
                        >
                          {latestArticle.title}
                        </Link>
                      </h2>
                      <p className="fs-6">
                        {truncateText(latestArticle.description, 200)}
                      </p>
                      <button
                        className="btn btn-dark text-light mt-3 fw-semibold"
                        onClick={() => navigate(`/artikel-detail/${latestArticle.id}`)}
                      >
                        Baca Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="mt-5">
              <h2 className="fw-bolder fs-4 mb-3">Artikel Lainnya</h2>
              <div className="row">
                {otherArticles.map((article) => (
                  <div className="col-md-4 mb-4" key={article.id}>
                    <div className="card-artikel">
                      <Link
                        to={`/artikel-detail/${article.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {article.previewImage ? (
                          <img
                            style={imgStyles.miniImg}
                            src={article.previewImage}
                            alt={article.title}
                          />
                        ) : (
                          <div
                            style={imgStyles.miniImg}
                            className="bg-light d-flex align-items-center justify-content-center"
                          >
                            <span className="text-muted">No image available</span>
                          </div>
                        )}
                        <h3 className="fs-6">{article.title}</h3>
                        <p className="text-muted">
                          {truncateText(article.description, 100)}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Artikel;
