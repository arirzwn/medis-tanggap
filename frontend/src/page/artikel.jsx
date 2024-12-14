import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Artikel1 from '../images/artikel.png';
import Artikel2 from '../images/artikel2.jpg';

function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/articles');
      console.log('API Response:', response.data); // Debug log

      if (response.data) {
        const sortedArticles = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setArticles(sortedArticles);
      }
    } catch (error) {
      console.error('Error details:', error.response || error);
      setError('Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>Error: {error}</div>;
  if (articles.length === 0) return <div>No articles found</div>;

  const latestArticle = articles.length > 0 ? articles[0] : null;
  const otherArticles = articles.slice(1);

  // Truncate text function
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

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
                  <img
                    className="artikel-img"
                    src={latestArticle.image_url || Artikel2}
                    alt={latestArticle.title}
                  />
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
                  <h2 className="fs-6">
                    {truncateText(latestArticle.description, 200)}
                  </h2>
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
              <div className="col-md-4 mb-4" key={article.id}>
                <Link
                  to={`/artikel-detail/${article.id}`}
                  className="text-decoration-none text-dark"
                >
                  <img
                    className="artikel-mini-img"
                    src={article.image_url || Artikel2}
                    alt={article.title}
                  />
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
                  <h2 className="fw-semibold fs-6 mb-3 mt-2">
                    {article.title}
                  </h2>
                  <h2 className="fw-lighter fs-6">
                    {truncateText(article.description, 100)}
                  </h2>
                </Link>
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
