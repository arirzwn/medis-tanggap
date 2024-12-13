import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from '../components/sidebarKlinik';
import './klinikStyle.css';

function KlinikArtikel() {
  const [articles, setArticles] = useState([]);
  const [token, setToken] = useState('');
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

  const handleUpdate = (id) => {
    navigate(`/update-article/${id}`);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/articles/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArticles(articles.filter((article) => article.id !== id));
        Swal.fire('Deleted!', 'Your article has been deleted.', 'success');
      } catch (error) {
        console.error('There was an error deleting the article!', error);
      }
    }
  };

  return (
    <>
      <Sidebar>
        <div className="container-fluid">
          <div className="d-flex justify-content-between p-3">
            <h2>Data Artikel</h2>
            <button className="btn btn-primary hover-button">
              <Link
                to="/create-article"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Buat Artikel
              </Link>
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={article.id}>
                    <td>{index + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.author}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleUpdate(article.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => handleDelete(article.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/artikel/${article.id}`}
                        className="btn btn-info btn-sm"
                      >
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default KlinikArtikel;
