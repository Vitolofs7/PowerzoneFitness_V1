import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        const cookiesAcceptedStorage = localStorage.getItem('cookiesAccepted');
        if (cookiesAcceptedStorage === 'true') {
            setCookiesAccepted(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    const handleResetCookies = () => {
        setCookiesAccepted(false);
        localStorage.removeItem('cookiesAccepted');
    };

    return (
        <footer className="footer">
            {!cookiesAccepted && (
                <div className="aviso-cookies" id="aviso-cookies">
                    <img className="galleta" src="/images/cookie.svg" alt="Galleta" />
                    <h3 className="titulo">Cookies</h3>
                    <p className="parrafo">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
                    <button className="boton" id="btn-aceptar-cookies" onClick={handleAcceptCookies}>De acuerdo</button>
                    <a className="enlace" href="/cookies">Aviso de Cookies</a>
                </div>
            )}
            {!cookiesAccepted && (
                <div className="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>
            )}
            <div className={`footer-content ${!cookiesAccepted ? 'disabled' : ''}`}>
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/images/gymLogo-removebg-preview.png" alt="Logo" />
                    </div>
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h4>EXPLORA</h4>
                            <a href="#start">Inicio</a>
                            <a href="#us">Nosotros</a>
                            <a href="#services">Servicios</a>
                            <a href="#gallery">Galeria</a>
                            <a href="#team">Equipo</a>
                        </div>
                        <div className="footer-column">
                            <h4>RECURSOS</h4>
                            <a href="https://www.figma.com/">Figma</a>
                            <a href="https://fontawesome.com/">Font Awesome</a>
                            <a href="https://fonts.google.com/">Google Fonts</a>
                            <a href="#">Inspiration Webs</a>
                        </div>
                        <div className="footer-column">
                            <h4>PRECIOS</h4>
                            <a href="#">Resumen de Precios</a>
                            <a href="#">Datos Flexibles</a>
                            <a href="#">Empresa</a>
                        </div>
                        <div className="footer-column">
                            <h4>DESARROLLADOR</h4>
                            <a href="#">Foro</a>
                            <a href="#">Proyectos</a>
                            <a href="#">Sobre mí</a>
                        </div>
                        <div className="footer-column">
                            <h4>EMPRESA</h4>
                            <a href="#">Sobre Nosotros</a>
                            <a href="#">Blog</a>
                            <a href="#">Recorrido</a>
                        </div>
                        <div className="footer-column">
                            <h4>REDES</h4>
                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://twitter.com/?lang=es"><i className="fa-brands fa-twitter"></i></a>
                            <a href="/rss-code/RssCode.xml"><i className="fa-solid fa-rss"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 POWERZONE FITNESS. Todos los derechos reservados</p>
                    <button className="boton-reset" onClick={handleResetCookies}>Reiniciar cookies</button>
                    <a href="#">Terms</a>
                    <a href="/cookies"> Política de Privacidad y Cookies</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
