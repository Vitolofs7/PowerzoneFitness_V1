import './Header.css';

function Header() {
    return (

        <div className="header-header-container">

            <header>
                <img src="/images/gymLogo-removebg-preview.png" alt="Logo" />

                <nav className="header-header-nav">
                    <a href="/home">Inicio</a>
                    <a href="#us">Nosotros</a>
                    <a href="#services">Servicios</a>
                    <a href="#gallery">Galeria</a>
                    <a href="/log">Registrate</a>
                    <a href="/location">Ubicación</a>
                </nav>
                <div className="header-networks">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="header-nav-responsive">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>

        </div>
    )
}

export default Header;