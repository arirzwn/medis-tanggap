import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Section1 from '../images/dashboard.png'
import Section2 from '../images/section2.png'
import Section3 from '../images/section3.png'
import Map from '../images/map.png'
import Artikel from '../images/artikel.png'
import Arrow from '../images/arrow.png'

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="w-100">
                <section id="sec1" className="bg-dark-subtle h-100 p-5">
                    <div className="container d-flex align-items-center flex-column flex-md-row">
                        <div className="col-md-6 col-12 text-center text-md-start">
                            <h1 className="fw-bold">Hello Welcome <br /> To <span>Medis Tanggap</span></h1>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book</p>
                            <button className="btn btn-brand text-light" onClick={() => { navigate("/diagnosa") }}>Diagnosa <span id="btn"><img src={Arrow} alt="" /></span></button>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={Section1} alt="" className="img-fluid" />
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
                            <p className="mb-4">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <ul className="navbar-nav">
                                <li><img id="li" src={Arrow} alt="" /> Fitur Diagnosa Penyakit Selama Kehamilan</li>
                                <li><img id="li" src={Arrow} alt="" /> Fitur Cari Rumah Sakit</li>
                                <li><img id="li" src={Arrow} alt="" /> Artikel Kesehatan</li>
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
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book</p>
                            <button className="btn btn-sec3 text-light" onClick={() => { navigate("/diagnosa") }}>Diagnosa</button>
                        </div>
                    </div>
                </section>

                <section id="sec4" className="p-5">
                    <div className="container d-flex align-items-center flex-column flex-md-row">
                        <div className="col-md-7 col-12 mb-4 mb-md-0">
                            <h1 className="fw-bold">Fitur <span>Cari Rumah Sakit</span><br /> Medis Tanggap</h1>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book</p>
                            <button className="btn btn-sec3 text-light">Cari Sekarang</button>
                        </div>
                        <div className="col-md-5 col-12">
                            <img src={Map} alt="" className="img-fluid" />
                        </div>
                    </div>
                </section>

                <section id="sec5" className="p-5">
                    <h1 className="text-center mb-5">Artikel <span>Medis Tanggap</span></h1>
                    <div className="d-flex flex-column flex-sm-row justify-content-around">
                        <div className="card mb-4">
                            <img src={Artikel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img src={Artikel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img src={Artikel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
