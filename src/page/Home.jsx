import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Section1 from "../images/dashboard.png";
import Section2 from "../images/section2.png";
import Section3 from "../images/section3.png";
import Map from "../images/map.png";
import Artikel from "../images/artikel.png";
import Arrow from "../images/arrow.png";
import axios from "axios";

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
    const div = document.createElement("div");
    div.innerHTML = content;
    const img = div.querySelector("img");
    return img ? img.src : null;
  };

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/articles");
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
      console.error("Error fetching articles:", error);
      setError("Failed to fetch articles");
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

  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', text: 'Some quick example text to build on the card.' },
    { id: 2, title: 'Card 2', text: 'Some quick example text to build on the card.' },
    { id: 3, title: 'Card 3', text: 'Some quick example text to build on the card.' },
    { id: 4, title: 'Card 4', text: 'Some quick example text to build on the card.' },
  ]);

  // Perbaikan handleScroll untuk scroll horizontal
  const handleScroll = () => {
    const scrollPosition = cardsContainerRef.current.scrollLeft;
    const maxScrollLeft = cardsContainerRef.current.scrollWidth - cardsContainerRef.current.clientWidth;
  
    // Jika scroll sudah mencapai ujung kanan
    if (scrollPosition >= maxScrollLeft) {
      resetCards();
    }
  };
  

  const resetCards = () => {
    setCards((prevCards) => {
      const totalCards = prevCards.length;
      const newCards = [];
  
      for (let i = 0; i < 1000; i++) {
        newCards.push(prevCards[(i + totalCards) % totalCards]);
      }
  
      return [...prevCards, ...newCards];
    });
  };

  useEffect(() => {
    // Menambahkan event listener untuk scroll horizontal pada container
    const container = cardsContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <Navbar />
      <div className="w-100">
        <section
          id="sec1"
          className="h-100 section-1"
          style={{ backgroundColor: "#EDF2F6" }}
        >
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-6 col-12 text-center text-md-start">
              <h1 className="fw-bold">
                Selamat Datang <br /> Di{" "}
                <span style={{ color: "#174AB5" }}>Medis Tanggap</span>
              </h1>
              <p style={{ textAlign: "justify" }}>
                Medis Tanggap memberikan solusi inovatif untuk meningkatkan
                akses layanan kesehatan bagi ibu hamil. Dengan teknologi modern,
                kami menyediakan diagnosis, informasi kesehatan, dan fitur
                rujukan rumah sakit secara cepat dan akurat. Kami hadir untuk
                memastikan Anda mendapatkan layanan medis yang tepat, kapan saja
                dan di mana saja.
              </p>
              <div>
                <h5 className="mb-3 fw-bold" style={{ color: "#0a192f" }}>
                  Mengapa Memilih Kami?
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-center">
                    <span style={{ color: "#0a192f" }} className="me-2 fs-4">
                      ✓
                    </span>
                    Akses Mudah dan Fleksibel
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span style={{ color: "#0a192f" }} className="me-2 fs-4">
                      ✓
                    </span>
                    Sistem Rujukan Terintegrasi Real-time
                  </li>
                  <li className="d-flex align-items-center">
                    <span style={{ color: "#0a192f" }} className="me-2 fs-4">
                      ✓
                    </span>
                    Informasi Kesehatan yang Komprehensif
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12 image-home">
              <img src={Section1} alt="" className="img-fluid" />
            </div>
          </div>
        </section>

        <section
          id="sec2"
          className="h-100 section-2 text-light"
          style={{ backgroundColor: "#0a192f" }}
        >
          <div className="container d-flex align-items-center flex-column flex-md-row">
            <div className="col-md-6 col-12 mb-4 mb-md-0 section-image-1">
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
              <ul className="navbar-nav-fitur">
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{" "}
                  Fitur Diagnosa Penyakit Selama Kehamilan
                </li>
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{" "}
                  Fitur Cari Rumah Sakit
                </li>
                <li>
                  <img id="li" src={Arrow} className="img-arrow1" alt="" />{" "}
                  Artikel Kesehatan
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sec3" className="section-3">
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
                style={{ background: "#0a192f" }}
                onClick={() => {
                  navigate("/diagnosa");
                }}
              >
                Diagnosa
              </button>
            </div>
          </div>
        </section>

        <section id="sec4" className="section-4">
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
                  navigate("/rumah-sakit");
                }}
                className="btn btn-sec3 text-light"
                style={{ background: "#0a192f" }}
              >
                Cari Sekarang
              </button>
            </div>
            <div className="col-md-5 col-12">
              <img src={Map} alt="" className="img-fluid" />
            </div>
          </div>
        </section>

        <section id="sec5" className="section-5">
  <h2 className="text-center mb-5 fw-bold">
    Artikel <span style={{ color: "#174AB5" }}>Medis Tanggap</span>
  </h2>
  <div
    className="d-flex align-items-center flex-column flex-md-row mb-4"
    ref={cardsContainerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    style={{
      overflowX: "auto",  /* Aktifkan scroll horizontal */
      cursor: "grab",
      whiteSpace: "nowrap",  /* Pastikan card tetap berada dalam satu baris */
    }}
  >
    {cards.map((card) => (
      <div
        key={card.id}
        className="card mx-2 my-3"
        style={{
          width: "18rem",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={Artikel}
          className="card-img-top"
          alt="Card image"
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <a href="/" className="btn btn-primary">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
      <Footer />
    </>
  );
}

export default Home;