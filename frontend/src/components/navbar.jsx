function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-2 justify-content-evenly">
            <h1>Logo</h1>
            <ul className="d-flex w-75 justify-content-evenly p-0 m-0" style={{ listStyle: "none" }}>
                <li className="navbar-item">
                    <a className="text-decoration-none text-dark" href="/">Beranda</a>
                </li>
                <li className="navbar-item">
                    <a className="text-decoration-none text-dark" href="/diagnosa">Diagnosa</a>
                </li>
                <li className="navbar-item">
                    <a className="text-decoration-none text-dark" href="/artikel">Artikel</a>
                </li>
                <li className="navbar-item">
                    <a className="text-decoration-none text-dark" href="/rumah-sakit">Rumah Sakit</a>
                </li>
            </ul>
            <button className="btn text-light" style={{backgroundColor: "#1800B0"}}>Login</button>
        </nav>
    );
}

export default Navbar;
