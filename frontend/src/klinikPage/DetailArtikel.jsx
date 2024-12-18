import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SidebarKlinik from '../components/sidebarKlinik';
import Artikel1 from '../images/artikel.png';

function DetailArtikel() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/articles/${id}`
        );
        setArticle(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <SidebarKlinik>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '500px' }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </SidebarKlinik>
    );
  }

  if (error) {
    return (
      <SidebarKlinik>
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </SidebarKlinik>
    );
  }

  if (!article) {
    return (
      <SidebarKlinik>
        <div className="alert alert-info text-center">Article not found</div>
      </SidebarKlinik>
    );
  }

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = Artikel1; // Fallback to default image
  };

  return (
    <SidebarKlinik>
      <div className="h-100" style={{ minWidth: '1200px' }}>
        <div className="container">
          {/* <section className="bg-light shadow-md p-4 mb-4">
            <h1 className="fw-bolder fs-3 text-center mt-4">{article.title}</h1>
            <img
              className="rounded mx-auto d-block mt-4 mb-4 artikel-detail-img"
              src={article.image || Artikel1}
              onError={handleImageError}
              alt={article.title}
            />
          </section> */}
          <section className="bg-light shadow-md p-4">
            <div className="row align-items-center mb-4">
              <div className="col-auto">
                <img
                  className="artikel-detail-profil rounded-circle"
                  src={article.authorImage || Artikel1}
                  onError={handleImageError}
                  alt={article.author}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-auto">
                <h3 className="fw-bolder artikel-detail-username mb-0">
                  {article.author || 'Anonymous'}
                </h3>
                <small className="text-muted">
                  {new Date(article.date).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </small>
              </div>
            </div>
            <div className="mt-3">
              <h2 className="fw-bolder fs-4 mb-4">{article.description}</h2>
              <div
                className="fs-6 mb-3"
                dangerouslySetInnerHTML={{
                  __html:
                    article.content?.replace(/\n/g, '<br/>') ||
                    'No content available.',
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </SidebarKlinik>
  );
}

export default DetailArtikel;
