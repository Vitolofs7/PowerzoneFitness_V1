import './Header.css';

function Header() {
    return (

        <div class="header-container">

            <header>
                <img src="/images/gymLogo-removebg-preview.png" alt="Logo" />

                <nav id="header-nav">
                    <a href="#start">Inicio</a>
                    <a href="#us">Nosotros</a>
                    <a href="#services">Servicios</a>
                    <a href="#team">Equipo</a>
                    <a href="#contact">Contacto</a>
                </nav>
                <div class="networks">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="nav-responsive" id="nav-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>

        </div>
    )
}

export default Header;