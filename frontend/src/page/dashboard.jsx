import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate()
    return(
        <>
        <Navbar />
        <div>
            <section className="bg-dark-subtle h-100 p-3">
                <div>
                    <h2>Halaman Dashboard</h2>
                </div>
                <div>
                    <h2>Selamat Datang</h2>
                </div>
                <button 
                onClick={()=>{navigate("/diagnosa")}}
                className="btn text-light" style={{backgroundColor: "#1800B0"}}>
                    Diagnosa 
                    <span><button className="btn">➡️</button></span>
                </button>
            </section>
            
            <section className="h-100 p-3 text-light" style={{backgroundColor: "#1800B0"}}>
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur earum quasi quam voluptates iste numquam nam eius, eligendi recusandae soluta.</h2>
                </div>
                <div>
                    <h2>Selamat Datang</h2>
                </div>
            </section>

            <section className="h-100 p-3">
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur earum quasi quam voluptates iste numquam nam eius, eligendi recusandae soluta.</h2>
                </div>
                <div>
                    <h2>Selamat Datang</h2>
                </div>
            </section>

            <section className="h-100 p-3 text-light" style={{backgroundColor: "#1800B0"}}>
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur earum quasi quam voluptates iste numquam nam eius, eligendi recusandae soluta.</h2>
                </div>
                <div>
                    <h2>Selamat Datang</h2>
                </div>
            </section>

            <section className="h-100 p-3">
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur earum quasi quam voluptates iste numquam nam eius, eligendi recusandae soluta.</h2>
                </div>
                <div>
                    <h2>Selamat Datang</h2>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}

export default Dashboard