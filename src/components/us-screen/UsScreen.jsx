import './UsScreen.css';

function UsScreen() {
    return (

        <section className="us-screen-us" id="us">
            <div className="us-screen-row">
                <div className="us-screen-col">
                    <img src="/images/nosotros.png" alt=""></img>
                </div>
                <div className="us-screen-col">
                    <div className="us-screen-title-container">
                        <div className="us-screen-number">
                            01
                        </div>
                        <div className="us-screen-info">
                            <span className="us-screen-phrase">LA MEJOR EXPERIENCIA</span>
                            <h2>NOSOTROS</h2>
                        </div>
                    </div>
                    <p className="us-screen-p-special">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="us-screen-p-special-txt">En nuestras instalaciones de primera clase, encontrarás todo lo necesario para alcanzar tus metas fitness. Con equipos de última generación y un equipo de entrenadores personales altamente capacitado, te ofrecemos un ambiente motivador donde cada entrenamiento es una experiencia única.</p>
                    <p className="us-screen-p-special-txt">Desde clases grupales hasta asesoramiento nutricional, estamos comprometidos con tu bienestar integral. Únete a nuestra comunidad fitness y descubre por qué somos tu mejor opción para alcanzar tus objetivos. ¡Te esperamos para ayudarte a lograr grandes resultados!</p>

                    <p className="us-screen-p-special-phone">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="us-screen-p-special-phone-txt">En nuestras instalaciones de primera clase, encontrarás todo lo necesario para alcanzar tus metas fitness. Con equipos de última generación y un equipo de entrenadores personales altamente capacitado, te ofrecemos un ambiente motivador donde cada entrenamiento es una experiencia única.</p>
                </div>
            </div>
            <hr></hr>
            <div className="us-screen-row-us">
                <div className="us-screen-col1">
                    <span className="us-screen-phrase">
                        <span className="us-screen-RedTxt">ENTRENA</span> DIFERENTE
                    </span>
                    <h2>ENTRENA <span className="us-screen-RedTxt">GRATIS</span> HOY!</h2>
                </div>
                <div className="us-screen-col2">
                    <button>PASE GRATIS</button>
                </div>
            </div>
        </section>
    )
}

export default UsScreen;