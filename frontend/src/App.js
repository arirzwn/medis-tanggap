import Dashboard from './page/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Diagnosa from './page/DiagnosaPage/Diagnosa';
import Artikel from './page/artikel';
import Detail from './page/artikel-detail';
import RumahSakit from './page/rumahSakit';
import LoginForm from './page/LoginPage/Login';
import Register from './page/RegisterPage/Register';
import DumyDashboard from './page/TestBerhasilLogin/DumyDashborad';
import ResultDiagnosa from './page/DiagnosaPage/ResultDiagnosa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diagnosa" element={<Diagnosa />} />
        <Route path="/result-diagnosa" element={<ResultDiagnosa />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel-detail" element={<Detail />} />
        <Route path="/rumah-sakit" element={<RumahSakit />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />{' '}
        <Route path="dashboard" element={<DumyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
