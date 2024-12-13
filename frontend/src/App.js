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
import UpdateArticle from './page/UpdateArticle/UpdateArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosa" element={<Diagnosa />} />
        <Route path="/result-diagnosa" element={<ResultDiagnosa />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel-detail/:id" element={<Detail />} />
        <Route path="/rumah-sakit" element={<RumahSakit />} />
        <Route path="/provinsi" element={<Provinsi />} />
        <Route path="/rs" element={<Rs />} />
        <Route path="/kamar" element={<Kamar />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DumyDashboard />} />
        <Route path="/update-article/:id" element={<UpdateArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
