import './LocationScreenTxt.css';

function LocationScreenTxt() {
    return (
        <section className="location-screen-location">
            <div className="location-screen-row">
                <div className="location-screen-col">
                    <div className="location-screen-title-container">
                        <div className="location-screen-number">04</div>
                        <div className="location-screen-info">
                            <span className="location-screen-phrase">EXPERIENCIA INIGUALABLE</span>
                            <h2 className="location-screen-RedTxt">NUESTRA UBICACIÓN</h2>
                        </div>
                    </div>
                    <p className="location-screen-p-special">Explora lo mejor de nuestro gimnasio.</p>
                    <p className="location-screen-p-special-txt">Situado en el vibrante corazón de la ciudad, nuestro centro moderno está equipado con tecnología de punta y un equipo de profesionales expertos listos para motivarte. Cada sesión aquí es diseñada para ser una experiencia transformadora.</p>
                    <p className="location-screen-p-special-txt">Ofrecemos desde clases grupales hasta asesoramiento personalizado en nutrición, comprometidos totalmente con tu salud y bienestar. Únete a nuestra comunidad y descubre por qué somos la elección perfecta para tus metas de fitness. ¡Ven y alcanza tus sueños con nosotros!</p>
                </div>
            </div>
            <hr />
            <div className="location-screen-row">
                <div className="location-screen-col">
                    <span className="location-screen-phrase">
                        <span className="location-screen-RedTxt">ENTRENA</span> CON PASIÓN
                    </span>
                    <h2>¡ÚNETE <span className="location-screen-RedTxt">A NUESTRA FAMILIA</span>!</h2>
                </div>
                <div className="location-screen-col">
                    <button className="primary-button" onClick={() => window.location.href = "/log"}>
                        REGÍSTRATE AHORA
                    </button>
                </div>
            </div>
        </section>
    );
}

export default LocationScreenTxt;