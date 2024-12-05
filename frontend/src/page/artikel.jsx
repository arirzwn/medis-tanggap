import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import Artikel1 from "../images/artikel.png";
import Artikel2 from "../images/artikel2.jpg";

function Artikel() {
    const navigate = useNavigate()
    return(
        <>
                <Navbar />
        <div className="container align-items-center">
            <section className="h-100 p-2 text-white">
                <div className="artikel-tagline">
                    <h3 className="fw-bolder fst-italic fs-4 m-4">
                        Kesehatan adalah aset berharga, jaga hari ini untuk hidup yang lebih baik esok.
                    </h3>
                </div>
            </section>
            <section>
                <div className="row m-2">
                    <div className="col">
                        <Link to="/artikel-detail" className="text-decoration-none text-dark">
                            <img className="artikel-img" src={Artikel2}alt="" />
                        </Link>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-1">
                            <img className="artikel-profil" src={Artikel1} alt="" />
                            </div>
                            <div className="col-1" style={{width: "110px"}}>
                                <h3 className="fw-bolder artikel-username">Dr. Ricard</h3>
                            </div>
                            <div className="col-1" style={{width: "5px"}}>
                                <h3 className="hari">~</h3>
                            </div>
                            <div className="col-4">
                                <h3 className="hari">1 Hari Yang Lalu</h3>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h2 className="fw-bolder fs-4">
                            <Link to="/artikel-detail" className="text-decoration-none text-dark">
                                Panduan Sederhana Menjaga Pola Makan Sehat untuk Hidup Lebih Berkualitas
                            </Link>    
                            </h2>
                            <h2 className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora necessitatibus amet, totam laboriosam nesciunt est libero nobis. Sint ipsum laboriosam unde quisquam ad mollitia, recusandae aliquid? Nobis, ipsa vitae.</h2>
                            <button className="btn btn-brand text-light mt-3 fw-semibold" onClick={()=>{navigate("/artikel-detail")}}>Baca Sekarang</button>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{margin: "18px"}}>
                <h2 className= "fw-bolder fs-4 mb-3 mt-5">Artikel Terbaru</h2>
                <div className="row">
                    <div className="col">
                        <img className="artikel-mini-img" src={Artikel2} alt="" />
                        <div className="row">
                            <div className="col-1">
                            <img className="artikel-mini-profil" src={Artikel1} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="fw-bold artikel-mini-username">
                                    Dr. Ricard
                                </h3>
                                <h3 className="artikel-mini-hari">1 Hari Yang Lalu</h3>
                            </div>
                        </div>
                        <h2 className="fw-semibold fs-6 mb-3 mt-2">Panduan Sederhana Menjaga Pola Makan Sehat untuk Hidup Lebih Berkualitas</h2>
                        <h2 className="fw-lighter fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat labore repellendus, suscipit itaque libero incidunt necessitatibus eligendi neque cumque, quos, animi praesentium illo aspernatur eos in doloribus fuga doloremque?</h2>
                    </div>
                    <div className="col">
                        <img className="artikel-mini-img" src={Artikel2} alt="" />
                        <div className="row">
                            <div className="col-1">
                            <img className="artikel-mini-profil" src={Artikel1} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="fw-bold artikel-mini-username">
                                    Dr. Ricard
                                </h3>
                                <h3 className="artikel-mini-hari">1 Hari Yang Lalu</h3>
                            </div>
                        </div>
                        <h2 className="fw-semibold fs-6 mb-3 mt-2">Panduan Sederhana Menjaga Pola Makan Sehat untuk Hidup Lebih Berkualitas</h2>
                        <h2 className="fw-lighter fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat labore repellendus, suscipit itaque libero incidunt necessitatibus eligendi neque cumque, quos, animi praesentium illo aspernatur eos in doloribus fuga doloremque?</h2>
                    </div>
                    <div className="col">
                        <img className="artikel-mini-img" src={Artikel2} alt="" />
                        <div className="row">
                            <div className="col-1">
                            <img className="artikel-mini-profil" src={Artikel1} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="fw-bold artikel-mini-username">
                                    Dr. Ricard
                                </h3>
                                <h3 className="artikel-mini-hari">1 Hari Yang Lalu</h3>
                            </div>
                        </div>
                        <h2 className="fw-semibold fs-6 mb-3 mt-2">Panduan Sederhana Menjaga Pola Makan Sehat untuk Hidup Lebih Berkualitas</h2>
                        <h2 className="fw-lighter fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat labore repellendus, suscipit itaque libero incidunt necessitatibus eligendi neque cumque, quos, animi praesentium illo aspernatur eos in doloribus fuga doloremque?</h2>
                    </div>
                    <div className="col">
                        <img className="artikel-mini-img" src={Artikel2} alt="" />
                        <div className="row">
                            <div className="col-1">
                            <img className="artikel-mini-profil" src={Artikel1} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="fw-bold artikel-mini-username">
                                    Dr. Ricard
                                </h3>
                                <h3 className="artikel-mini-hari">1 Hari Yang Lalu</h3>
                            </div>
                        </div>
                        <h2 className="fw-semibold fs-6 mb-3 mt-2">Panduan Sederhana Menjaga Pola Makan Sehat untuk Hidup Lebih Berkualitas</h2>
                        <h2 className="fw-lighter fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat labore repellendus, suscipit itaque libero incidunt necessitatibus eligendi neque cumque, quos, animi praesentium illo aspernatur eos in doloribus fuga doloremque?</h2>
                    </div>
                </div>
                
            </section>
        </div>
        <Footer />
        </>
    )
}

export default Artikel