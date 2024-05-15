// LoginScreen.js
import React, { useState } from 'react';
import './LoginScreen.css';

function LoginScreen() {
    const [emailHasValue, setEmailHasValue] = useState(false);

    function handleInputChange(event) {
        const inputContainer = event.target.closest('.input-container');
        if (event.target.value.trim() !== '') {
            setEmailHasValue(true);
        } else {
            setEmailHasValue(false);
        }
    }

    return (
        <section className='login-section'>
            <div className="container">
                <div className="form">
                    <form action="#">
                        <h2>Iniciar Sesión</h2>

                        <div className={`input-container ${emailHasValue ? 'input-has-value' : ''}`}>
                            <i className="fa-solid fa-envelope"></i>
                            <input type='email' required onInput={(e) => handleInputChange(e)} />
                            <label htmlFor="#">Email</label>
                        </div>

                        <div className="input-container">
                            <i className="fa-solid fa-lock"></i>
                            <input type='password' required />
                            <label htmlFor="#">Contraseña</label>
                        </div>

                        <div className="forget">
                            <label>
                                <input type='checkbox' /> Recordar
                                <a href="#"> Olvidé la contraseña</a>
                            </label>
                        </div>
                    </form>

                    <div>
                        <button className='login-button'>Acceder</button>

                        <div className="to-register">
                            <p>No tengo Cuenta <a href="#">Crear una</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LoginScreen;
