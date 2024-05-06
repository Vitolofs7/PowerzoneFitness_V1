import './LocationScreenTxt.css';

function LocationScreenTxt() {
    return (
        <section className="location-screen-location">
            <div className="location-screen-row">
                
                    <img src="/images/e3.png" alt=""></img>
                
                <div className="location-screen-col">
                    <div className="location-screen-title-container">
                        <div className="location-screen-number">
                            01
                        </div>
                        <div className="location-screen-info">
                            <span className="location-screen-phrase">LA MEJOR EXPERIENCIA</span>
                            <h2>UBICACIÓN</h2>
                        </div>
                    </div>
                    <p className="location-screen-p-special">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="location-screen-p-special-txt">En nuestro moderno centro ubicado en el corazón de la ciudad, encontrarás todo lo necesario para alcanzar tus metas fitness. Con equipos de última generación y un equipo de entrenadores personales altamente capacitado, te ofrecemos un ambiente motivador donde cada entrenamiento es una experiencia única.</p>
                    <p className="location-screen-p-special-txt">Desde clases grupales hasta asesoramiento nutricional, estamos comprometidos con tu bienestar integral. Únete a nuestra comunidad fitness y descubre por qué somos tu mejor opción para alcanzar tus objetivos. ¡Te esperamos en nuestro centro para ayudarte a lograr grandes resultados!</p>

                    <p className="location-screen-p-special-phone">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="location-screen-p-special-phone-txt">En nuestro moderno centro ubicado en el corazón de la ciudad, encontrarás todo lo necesario para alcanzar tus metas fitness. Con equipos de última generación y un equipo de entrenadores personales altamente capacitado, te ofrecemos un ambiente motivador donde cada entrenamiento es una experiencia única.</p>
                </div>
            </div>
            <hr></hr>
            <div className="location-screen-row-location">
                <div className="location-screen-col1">
                    <span className="location-screen-phrase">
                        <span className="location-screen-RedTxt">ENTRENA</span> DIFERENTE
                    </span>
                    <h2>ÚNETE <span className="location-screen-RedTxt">A NOSOTROS</span>!</h2>
                </div>
                <div className="location-screen-col2">
                <button onClick={() => window.location.href = "/log"}>REGISTRATE</button>
                </div>
            </div>
        </section>
    )
}

export default LocationScreenTxt;