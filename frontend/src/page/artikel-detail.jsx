import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

function Detail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/articles/${id}`
      );
      setArticle(response.data);
    } catch (error) {
      console.error('There was an error fetching the article!', error);
      setError('Failed to fetch article');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: '50vh' }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container text-center mt-5">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="container text-center mt-5">
          <h2>Article not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <article>
              <header className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <span className="fw-bold">{article.author}</span>
                    <span className="text-muted ms-2">•</span>
                    <span className="text-muted ms-2">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </header>

              <div
                className="ql-editor article-content"
                style={{
                  padding: '0 20px',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
