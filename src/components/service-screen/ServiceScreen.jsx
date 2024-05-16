import './ServiceScreen.css';

function ServiceScreen() {
    return (
        <section className="service-screen-services" id="services">
            <div className="service-screen-services-content">
                <div className="service-screen-row">
                    <div className="service-screen-col">
                        <div className="service-screen-title-container">
                            <div className="service-screen-number">
                                02
                            </div>
                            <div className="service-screen-info">
                                <span className="service-screen-phrase">LA MEJOR EXPERIENCIA</span>
                                <h2>SERVICIOS</h2>
                            </div>
                        </div>
                        <p className="service-screen-p-special">¡Descubre la experiencia definitiva en nuestro exclusivo centro de bienestar!</p>
                        <p className="service-screen-p-special-txt">En nuestras instalaciones de vanguardia, te ofrecemos todo lo que necesitas para alcanzar tus metas de salud y forma física. Con equipos de última tecnología y un equipo de expertos en fitness dedicados, te brindamos un entorno inspirador donde cada sesión de entrenamiento se convierte en una experiencia incomparable.</p>
                    </div>
                    <div className="service-screen-col">
                        <img src="/images/servicios.png" alt=""></img>
                    </div>
                </div>
            </div>

            <div className="service-screen-info-services">
                <div className="service-screen-service-rows1">
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-person-walking"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de Fitness</h3>
                        <p>¡Sumérgete en nuestras clases, descubre una nueva forma de ejercitarte!</p>
                    </div>
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-dumbbell"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de Crossfit</h3>
                        <p>¡Explora el mundo del CrossFit en nuestras clases emocionantes!</p>
                    </div>
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-mitten"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de Boxeo</h3>
                        <p>¡Descubre la intensidad del boxeo en nuestras clases especializadas!</p>
                    </div>
                </div>
                <div className="service-screen-service-rows2">
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-clock"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de yoga</h3>
                        <p>¡Explora la serenidad del yoga en nuestras clases dedicadas!</p>
                    </div>
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-bicycle"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de Resistencia</h3>
                        <p>¡Experimenta la fuerza y ​​la resistencia en nuestras clases especializadas!</p>
                    </div>
                    <div className="service-screen-service-column">
                        <i className="fa-solid fa-heart-circle-bolt"></i>
                        <h3><span className="service-screen-RedTxt">clases </span>de Cardio</h3>
                        <p>¡Sumérgete en la intensidad del cardio en nuestras clases dinámicas!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceScreen;