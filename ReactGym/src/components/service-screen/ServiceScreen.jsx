import './ServiceScreen.css';

function ServiceScreen() {
    return (
        <section className="services" id="services">
            <div className="services-content">
                <div className="row">
                    <div className="col">
                        <div class="title-container">
                            <div class="number">
                                02
                            </div>
                            <div class="info">
                                <span class="phrase">LA MEJOR EXPERIENCIA</span>
                                <h2>SERVICIOS</h2>
                            </div>
                        </div>
                        <p class="p-special">¡Descubre la experiencia definitiva en nuestro exclusivo centro de bienestar!</p>
                        <p>En nuestras instalaciones de vanguardia, te ofrecemos todo lo que necesitas para alcanzar tus metas de salud y forma física. Con equipos de última tecnología y un equipo de expertos en fitness dedicados, te brindamos un entorno inspirador donde cada sesión de entrenamiento se convierte en una experiencia incomparable.</p>
                    </div>
                    <div className="col">
                        <img src="/images/servicios.png" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="info-services">
                <table>
                    <tr>
                        <td>
                            <i class="fa-solid fa-person-walking"></i>
                            <h3><span className="RedTxt">clases </span>de Fitness</h3>
                            <p>¡Sumérgete en nuestras clases, descubre una nueva forma de ejercitarte!</p>
                        </td>
                        <td>
                            <i class="fa-solid fa-dumbbell"></i>
                            <h3><span className="RedTxt">clases </span>de Crossfit</h3>
                            <p>¡Explora el mundo del CrossFit en nuestras clases emocionantes!</p>
                        </td>
                        <td>
                            <i class="fa-solid fa-mitten"></i>
                            <h3><span className="RedTxt">clases </span>de Boxeo</h3>
                            <p>¡Descubre la intensidad del boxeo en nuestras clases especializadas!</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i class="fa-solid fa-clock"></i>
                            <h3><span className="RedTxt">clases </span>de yoga</h3>
                            <p>¡Explora la serenidad del yoga en nuestras clases dedicadas!</p>
                        </td>
                        <td>
                            <i class="fa-solid fa-bicycle"></i>
                            <h3><span className="RedTxt">clases </span>de Resistencia</h3>
                            <p>¡Experimenta la fuerza y ​​la resistencia en nuestras clases especializadas!</p>
                        </td>
                        <td>
                            <i class="fa-solid fa-heart-circle-bolt"></i>
                            <h3><span className="RedTxt">clases </span>de Cardio</h3>
                            <p>¡Sumérgete en la intensidad del cardio en nuestras clases dinámicas!</p>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default ServiceScreen;