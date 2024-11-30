import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Dashboard from "./page/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Diagnosa from "./page/diagnosa";
import Artikel from "./page/artikel";
import RumahSakit from "./page/rumahSakit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/diagnosa" element={<Diagnosa />}/>
        <Route path="/artikel" element={<Artikel />}/>
        <Route path="/rumah-sakit" element={<RumahSakit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;