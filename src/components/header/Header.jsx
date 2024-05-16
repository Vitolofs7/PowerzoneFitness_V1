import React from 'react';
import './Header.css';

function Header() {
    const openMenu = () => {
        document.getElementById('menu').style.display = 'block';
    };

    const closeMenu = () => {
        document.getElementById('menu').style.display = 'none';
    };

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
                <div className="header-nav-responsive" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>

            <div id="menu" className="menu">
                <div className="menu-header">
                    <button id="closeMenu" onClick={closeMenu}>X</button>
                </div>
                <div className="menu-options">
                    <a href="/home">INICIO</a>
                    <a href="#us">NOSOTROS</a>
                    <a href="#services">SERVICIOS</a>
                    <a href="#gallery">GALERIA</a>
                    <a href="/log">REGISTRATE</a>
                    <a href="/location">UBICACION</a>
                </div>
                <div className="menu-networks">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Header;