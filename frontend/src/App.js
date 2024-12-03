import Dashboard from './page/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Diagnosa from './page/diagnosa';
import Artikel from './page/artikel';
import RumahSakit from './page/rumahSakit';
import LoginForm from './page/LoginPage/Login';
import Register from './page/RegisterPage/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diagnosa" element={<Diagnosa />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/rumah-sakit" element={<RumahSakit />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />{' '}
        {/* Tambahkan rute ini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
