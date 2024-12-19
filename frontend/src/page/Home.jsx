import { useState, useEffect, useRef } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Section1 from '../images/dashboard.png';
import Section2 from '../images/section2.png';
import Section3 from '../images/section3.png';
import Map from '../images/map.png';
import Artikel from '../images/artikel.png';
import Arrow from '../images/arrow.png';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardsContainerRef = useRef(null);

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
        const processedArticles = response.data
          .map((article) => ({
            ...article,
            previewImage: extractFirstImage(article.content),
          }))
          .slice(0, 4); // Only get first 4 articles
        setArticles(processedArticles);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - cardsContainerRef.current.offsetLeft);
    setScrollLeft(cardsContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    cardsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <Navbar />
      <div className="w-100">
        <section
          id="sec1"
          className="h-100 p-5"
          style={{ backgroundColor: '#EDF2F6' }}
        >
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-6 col-12 text-center text-md-start">
              <h1 className="fw-bold">
                Selamat Datang <br /> Di{' '}
                <span style={{ color: '#174AB5' }}>Medis Tanggap</span>
              </h1>
              <p style={{ textAlign: 'justify' }}>
                Medis Tanggap memberikan solusi inovatif untuk meningkatkan
                akses layanan kesehatan bagi ibu hamil. Dengan teknologi modern,
                kami menyediakan diagnosis, informasi kesehatan, dan fitur
                rujukan rumah sakit secara cepat dan akurat. Kami hadir untuk
                memastikan Anda mendapatkan layanan medis yang tepat, kapan saja
                dan di mana saja.
              </p>
              <div>
                <h5 className="mb-3 fw-bold" style={{ color: '#0a192f' }}>
                  Mengapa Memilih Kami?
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-center">
                    <span style={{ color: '#0a192f' }} className="me-2 fs-4">
                      ✓
                    </span>
                    <span style={{ color: '#0a192f' }}>100+</span>&nbsp;pengguna
                    telah bergabung.
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span style={{ color: '#0a192f' }} className="me-2 fs-4">
                      ✓
                    </span>
                    <span style={{ color: '#0a192f' }}>95%</span>&nbsp;tingkat
                    kepuasan pengguna.
                  </li>
                  <li className="d-flex align-items-center">
                    <span style={{ color: '#0a192f' }} className="me-2 fs-4">
                      ✓
                    </span>
                    <span style={{ color: '#0a192f' }}>24/7</span>&nbsp;akses
                    tanpa batas.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img
                src={Section1}
                alt=""
                className="img-fluid"
                style={{ marginLeft: '70px' }}
              />
            </div>
          </div>
        </section>

        <section
          id="sec2"
          className="h-100 p-5 text-light"
          style={{ backgroundColor: '#0a192f' }}
        >
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <img src={Section2} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12">
              <h2 className="fw-bold mb-4">APA ITU MEDIS TANGGAP ?</h2>
              <p className="mb-4">
                Medis Tanggap adalah aplikasi yang memberikan solusi kesehatan
                dengan menyediakan fitur diagnosa penyakit, pencarian rumah
                sakit, serta akses artikel kesehatan untuk mendukung ibu hamil
                menjalani kehamilan dengan sehat dan aman.
              </p>
              <ul className="navbar-nav">
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{' '}
                  Fitur Diagnosa Penyakit Selama Kehamilan
                </li>
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{' '}
                  Fitur Cari Rumah Sakit
                </li>
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{' '}
                  Artikel Kesehatan
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sec3" className="p-5">
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-5 col-12 mb-4 mb-md-0">
              <img src={Section3} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7 col-12">
              <h1 className="fw-bold">
                Fitur <span>Diagnosa Penyakit</span>
                <br /> Selama Kehamilan
              </h1>
              <p>
                Membantu ibu hamil untuk mengenali gejala penyakit secara dini
                dan memberikan panduan langkah selanjutnya untuk menjaga
                kesehatan selama kehamilan.
              </p>
              <button
                className="btn btn-sec3 text-light"
                style={{ background: '#0a192f' }}
                onClick={() => {
                  navigate('/diagnosa');
                }}
              >
                Diagnosa
              </button>
            </div>
          </div>
        </section>

        <section id="sec4" className="p-5">
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-7 col-12 mb-4 mb-md-0">
              <h1 className="fw-bold">
                Fitur <span>Cari Rumah Sakit</span>
                <br /> Medis Tanggap
              </h1>
              <p>
                Memberikan informasi real-time tentang ketersediaan kamar rumah
                sakit terdekat, sehingga mempermudah proses rujukan bagi pasien
                dalam kondisi darurat.
              </p>
              <button
                onClick={() => {
                  navigate('/rumah-sakit');
                }}
                className="btn btn-sec3 text-light"
                style={{ background: '#0a192f' }}
              >
                Cari Sekarang
              </button>
            </div>
            <div className="col-md-5 col-12">
              <img src={Map} alt="" className="img-fluid" />
            </div>
          </div>
        </section>

        <section id="sec5" className="p-5">
          <h2 className="text-center mb-5 fw-bold">
            Artikel <span style={{ color: '#174AB5' }}>Medis Tanggap</span>
          </h2>
          <div className="wrapper">
            <div
              ref={cardsContainerRef}
              className="cards-container m-5 overflow-hidden"
              style={{
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                display: 'flex',
                gap: '1rem',
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {loading ? (
                <div className="d-flex justify-content-center w-100">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : articles.length === 0 ? (
                <div className="text-center">Tidak ada artikel tersedia</div>
              ) : (
                articles.map((article) => (
                  <div key={article.id} className="card border-0">
                    <img
                      src={article.previewImage || Artikel}
                      className="card-img-top"
                      alt={article.title}
                      onError={(e) => {
                        e.target.src = Artikel; // Fallback image
                      }}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">
                        {article.description
                          ? article.description.substring(0, 100) + '...'
                          : ''}
                      </p>
                      <button
                        className="btn text-light"
                        style={{ background: '#0a192f' }}
                        onClick={() =>
                          navigate(`/artikel-detail/${article.id}`)
                        }
                      >
                        Baca Selengkapnya
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
