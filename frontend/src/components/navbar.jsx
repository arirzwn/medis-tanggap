import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/diagnosa">
                Diagnosa
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/artikel">
                Artikel
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/rumah-sakit">
                Rumah Sakit
              </a>
            </li>
          </ul>
          <Link to="/login" className="btn btn-brand text-light">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
