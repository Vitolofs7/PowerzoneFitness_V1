
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
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
                        <a href="#">Figma</a>
                        <a href="#">Font Awesome</a>
                        <a href="#">Google Fonts</a>
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
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 POWERZONE FITNESS. Todos los derechos reservados</p>
                <a href="#">Terms</a>
                <a href="#"> Política de Privacidad y Cookies</a>
            </div>
        </footer>
    );
}

export default Footer;