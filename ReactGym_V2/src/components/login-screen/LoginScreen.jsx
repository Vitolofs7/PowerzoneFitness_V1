import './LoginScreen.css';


function LoginScreen() {
    return (
        <section className="login-screen-log">
            <div className="login-screen-row">
                <div className="login-screen-col">
                    <img src="/images/e2.png" alt=""></img>
                </div>
                <div className="login-screen-col">
                    <div className="login-screen-title-container">
                        <div className="login-screen-number">
                            01
                        </div>
                        <div className="login-screen-info">
                            <span className="login-screen-phrase">LA MEJOR EXPERIENCIA</span>
                            <h2>REGISTRATE</h2>
                        </div>
                    </div>
                    <p className="login-screen-p-special">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="login-screen-p-special">"¿Listo para dar el primer paso hacia una vida más saludable y en forma? ¡Regístrate ahora mismo y únete a nuestra comunidad fitness! En nuestro centro moderno y equipado con la última tecnología, te ofrecemos todo lo que necesitas para alcanzar tus metas de fitness. Desde clases grupales emocionantes hasta entrenamiento personalizado con nuestros expertos entrenadores, cada sesión será una experiencia única y motivadora. No esperes más, ¡tu mejor versión te está esperando! Regístrate hoy mismo y comienza tu viaje hacia una vida más activa y saludable."</p>

                    <p className="login-screen-p-special-phone">¡Descubre la mejor experiencia en nuestro gimnasio!</p>
                    <p className="login-screen-p-special-phone-txt">"¿Listo para dar el primer paso hacia una vida más saludable y en forma? ¡Regístrate ahora mismo y únete a nuestra comunidad fitness! En nuestro centro moderno y equipado con la última tecnología, te ofrecemos todo lo que necesitas para alcanzar tus metas de fitness. Desde clases grupales emocionantes hasta entrenamiento personalizado con nuestros expertos entrenadores, cada sesión será una experiencia única y motivadora. No esperes más, ¡tu mejor versión te está esperando! Regístrate hoy mismo y comienza tu viaje hacia una vida más activa y saludable."</p>
                </div>
            </div>
            <hr></hr>
            <div className="login-screen-row-log">
                <div className="login-screen-col1">
                    <span className="login-screen-phrase">
                        <span className="login-screen-RedTxt">ENTRENA</span> DIFERENTE
                    </span>
                    <h2>ÚNETE <span className="login-screen-RedTxt">A NOSOTROS</span>!</h2>
                    <form className="login-registration-form">
                        <input className="login-form-input" type="text" placeholder="Nombre" />
                        <input className="login-form-input" type="email" placeholder="Correo electrónico" />
                        
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginScreen;