import './UsScreen.css';

function UsScreen() {
    return (

        <section id="us" class="us">
            <div class="row">
                <div class="col">
                    <img src="/images/nosotros.png" alt=""></img>
                </div>
                <div class="col">
                    <div class="title-container">
                        <div class="number">
                            01
                        </div>
                        <div class="info">
                          <span class="phrase">LA MEJOR EXPERIENCIA</span>
                          <h2>NOSOTROS</h2>  
                        </div>
                    </div>
                    <p class="p-special">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p>En nuestras instalaciones de primera clase, encontrarás todo lo necesario para alcanzar tus metas fitness. Con equipos de última generación y un equipo de entrenadores personales altamente capacitado, te ofrecemos un ambiente motivador donde cada entrenamiento es una experiencia única.</p>
                    <p>Desde clases grupales hasta asesoramiento nutricional, estamos comprometidos con tu bienestar integral. Únete a nuestra comunidad fitness y descubre por qué somos tu mejor opción para alcanzar tus objetivos. ¡Te esperamos para ayudarte a lograr grandes resultados!</p>
                </div>
            </div>
            <hr></hr>
            <div class="row-us">
                <div class="col1">
                    <span class="phrase">
                        <span class="RedTxt">ENTRENA</span>DIFERENTE
                    </span>
                    <h2>ENTRENA <span class="RedTxt">GRATIS</span> HOY!</h2>
                </div>
                <div class="col2">
                    <button>PASE GRATIS</button>
                </div>
            </div>
        </section>
    )
}

export default UsScreen;