import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Diagnosa from './page/DiagnosaPage/Diagnosa';
import Artikel from './page/artikel';
import Detail from './page/artikel-detail';
import RumahSakit from './page/RumahSakitPage/rumahSakit';
import LoginForm from './page/LoginPage/Login';
import Register from './page/RegisterPage/Register';
import DumyDashboard from './page/TestBerhasilLogin/DumyDashborad';
import ResultDiagnosa from './page/DiagnosaPage/ResultDiagnosa';
import Provinsi from './page/RumahSakitPage/provinsi';
import Rs from './page/RumahSakitPage/rs';
import Kamar from './page/RumahSakitPage/kamar';
import KlinikDashboard from './klinikPage/klinikDashboard';
import Rujukan from './klinikPage/rujukan';
import Profil from './klinikPage/profil';
import Pengajuan from './page/DaftarKlinikPage/DaftarKlinik';
import KlinikArtikel from './klinikPage/artikelKlinik';
import BuatArtikel from './klinikPage/BuatArtikel';
import UpdateArtikel from './klinikPage/UpdateArtikel';
import DetailArtikel from './klinikPage/DetailArtikel';
import BuatRujukan from './klinikPage/BuatRujukan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosa" element={<Diagnosa />} />
        <Route path="/result-diagnosa" element={<ResultDiagnosa />} />

        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel-detail" element={<Detail />} />

        <Route path="/rumah-sakit" element={<RumahSakit />} />
        <Route path="/provinsi" element={<Provinsi />} />
        <Route path="/rs" element={<Rs />} />
        <Route path="/kamar" element={<Kamar />} />
        <Route path="/pengajuan" element={<Pengajuan />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="dashboard" element={<DumyDashboard />} />

        <Route path="/klinik/klinik-dashboard" element={<KlinikDashboard />} />
        <Route path="/klinik/klinik-rujukan" element={<Rujukan />} />
        <Route path="/klinik/klinik-profil" element={<Profil />} />
        <Route path="/klinik/klinik-artikelKlinik" element={<KlinikArtikel />} />  
        <Route path="/klinik/klinik-buat-artikel" element={<BuatArtikel/>} /> 
        <Route path="/klinik/klinik-ubah-artikel" element={<UpdateArtikel/>} /> 
        <Route path="/klinik/klinik-detail-artikel" element={<DetailArtikel/>} /> 
        <Route path="/klinik/klinik-buat-rujukan" element={<BuatRujukan/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
