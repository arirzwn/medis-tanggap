import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Section1 from '../images/dashboard.png';
import Section2 from '../images/section2.png';
import Section3 from '../images/section3.png';
import Map from '../images/map.png';
import Artikel from '../images/artikel.png';
import Arrow from '../images/arrow.png';

function Home() {
    const [cards, setCards] = useState([
        { id: 1, title: "Card 1", text: "Some quick example text to build on the card." },
        { id: 2, title: "Card 2", text: "Some quick example text to build on the card." },
        { id: 3, title: "Card 3", text: "Some quick example text to build on the card." },
        { id: 4, title: "Card 4", text: "Some quick example text to build on the card." }
    ]);
    const navigate = useNavigate();

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const bottomPosition = document.documentElement.offsetHeight;

        if (scrollPosition >= bottomPosition - 100) {
            resetCards();
        }
    };

    const resetCards = () => {
        setCards((prevCards) => [
            ...prevCards,
            { id: 1, title: "Card 1", text: "Some quick example text to build on the card." },
            { id: 2, title: "Card 2", text: "Some quick example text to build on the card." },
            { id: 3, title: "Card 3", text: "Some quick example text to build on the card." },
            { id: 4, title: "Card 4", text: "Some quick example text to build on the card." }
        ]);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="w-100">
                <section id="sec1" className="h-100 p-5" style={{ backgroundColor: "#EDF2F6" }}>
                    <div className="container d-flex align-items-center flex-column flex-md-row">
                        <div className="col-md-6 col-12 text-center text-md-start">
                            <h1 className="fw-bold">Selamat Datang <br /> Di <span>Medis Tanggap</span></h1>
                            <p style={{ textAlign: "justify" }}>
                                Medis Tanggap memberikan solusi inovatif untuk meningkatkan akses layanan kesehatan bagi ibu hamil. Dengan teknologi modern, kami menyediakan diagnosis, informasi kesehatan, dan fitur rujukan rumah sakit secara cepat dan akurat. Kami hadir untuk memastikan Anda mendapatkan layanan medis yang tepat, kapan saja dan di mana saja.
                            </p>
                            <div>
                                <h5 className="mb-3 text-primary fw-bold">Mengapa Memilih Kami?</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex align-items-center">
                                        <span className="text-primary me-2 fs-4">✓</span>
                                        <span className="text-primary">100+</span>&nbsp;pengguna telah bergabung.
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <span className="text-primary me-2 fs-4">✓</span>
                                        <span className="text-primary">95%</span>&nbsp;tingkat kepuasan pengguna.
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <span className="text-primary me-2 fs-4">✓</span>
                                        <span className="text-primary">24/7</span>&nbsp;akses tanpa batas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={Section1} alt="" className="img-fluid" style={{ marginLeft: "70px" }} />
                        </div>
                    </div>
                </section>

                <section id="sec2" className="h-100 p-5 text-light" style={{ backgroundColor: "#1800B0" }}>
                    <div className="container d-flex align-items-center flex-column flex-md-row">
                        <div className="col-md-6 col-12 mb-4 mb-md-0">
                            <img src={Section2} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h2 className="fw-bold mb-4">APA ITU MEDIS TANGGAP ?</h2>
                            <p className="mb-4" style={{ textAlign: "justify" }}>Medis Tanggap adalah aplikasi yang memberikan solusi kesehatan dengan menyediakan fitur diagnosa penyakit, pencarian rumah sakit, serta akses artikel kesehatan untuk mendukung ibu hamil menjalani kehamilan dengan sehat dan aman.</p>
                            <ul className="navbar-nav">
                                <li><img id="li" src={Arrow} className="img-arrow1" alt="" /> Fitur Diagnosa Penyakit Selama Kehamilan</li>
                                <li><img id="li" src={Arrow} className="img-arrow1" alt="" /> Fitur Cari Rumah Sakit</li>
                                <li><img id="li" src={Arrow} className="img-arrow1" alt="" /> Artikel Kesehatan</li>
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
                            <h1 className="fw-bold">Fitur <span>Diagnosa Penyakit</span><br /> Selama Kehamilan</h1>
                            <p>Membantu ibu hamil untuk mengenali gejala penyakit secara dini dan memberikan panduan langkah selanjutnya untuk menjaga kesehatan selama kehamilan.</p>
                            <button className="btn btn-sec3 text-light" onClick={() => { navigate("/diagnosa") }}>Diagnosa</button>
                        </div>
                    </div>
                </section>

                <section id="sec4" className="p-5">
                    <div className="container d-flex align-items-center flex-column flex-md-row">
                        <div className="col-md-7 col-12 mb-4 mb-md-0">
                            <h1 className="fw-bold">Fitur <span>Cari Rumah Sakit</span><br /> Medis Tanggap</h1>
                            <p>Memberikan informasi real-time tentang ketersediaan kamar rumah sakit terdekat, sehingga mempermudah proses rujukan bagi pasien dalam kondisi darurat.</p>
                            <button onClick={() => { navigate("/rumah-sakit") }} className="btn btn-sec3 text-light">Cari Sekarang</button>
                        </div>
                        <div className="col-md-5 col-12">
                            <img src={Map} alt="" className="img-fluid" />
                        </div>
                    </div>
                </section>

                <section id="sec5" className="p-5">
                    <h1 className="text-center mb-5">Artikel <span>Medis Tanggap</span></h1>
                    <div className="wrapper d-flex">
                        <div className="cards-container">
                            {cards.map(card => (
                                <div key={card.id} className="card m-4">
                                    <img src={Artikel} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Home;
