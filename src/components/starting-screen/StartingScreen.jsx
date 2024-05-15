import React, { useState, useEffect } from 'react';
import './StartingScreen.css';
import RateService from "../../services/firebase/suggestions.service.js";

function StartingScreen() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOptionsVisible, setIsOptionsVisible] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            setIsScrolling(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsOptionsVisible(!isDropdownOpen || isOptionsVisible);
    };

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changeSuggestion = (e) => {
        setSuggestion(e.target.value);
    };

    const submitSuggestion = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !suggestion.trim()) {
            setAlert("Los campos no pueden estar vacíos");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            return;
        }

        RateService.addRate(name, suggestion).then(() => {
            setAlert("Reseña añadida con éxito");
            setAlertType("success-message");
            setName("");
            setEmail("");
            setSuggestion("");
            setTimeout(() => {
                setAlert("");
            }, 3000);
        }).catch(error => {
            setAlert("Error al guardar la reseña");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            console.error(error);
        });
    };

    useEffect(() => {
        if (!isScrolling) {
            setIsScrolling(false);
        }
    }, [isScrolling]);

    return (
        <section className="starting-screen-start">
            <div className="starting-screen-section-content">
                <div className="starting-screen-info">
                    <h2>HAZ QUE <span className="starting-screen-RedTxt">OCURRA</span></h2>
                    <p>Triunfar es más fácil de lo que piensas !</p>
                    <a href="#about-us" className="starting-screen-more-btn" onClick={toggleDropdown}>
                        <i className="fa-solid fa-circle-chevron-down"></i>
                    </a>
                </div>
                {isDropdownOpen && (
                    <div className="starting-screen-dropdown">
                        <div className="form-container">
                            <form className='starting-screen-form' onSubmit={submitSuggestion}>
                                <label htmlFor="nombre">Nombre:</label>
                                <input className='starting-screen-input' type="text" id="nombre" name="nombre" value={name} onChange={changeName} required />

                                <label htmlFor="correo">Correo Electrónico:</label>
                                <input className='starting-screen-input' type="email" id="correo" name="correo" value={email} onChange={changeEmail} required />

                                <label htmlFor="consejo">Redacta tu Reseña:</label>
                                <textarea id="consejo" name="consejo" rows="4" value={suggestion} onChange={changeSuggestion} required></textarea>

                                <input className='starting-screen-input' type="submit" value="Enviar" />
                            </form>
                        </div>
                    </div>
                )}
                {isOptionsVisible && !isDropdownOpen && (
                    <div className="starting-screen-options">
                        <div className="starting-screen-option">01.FITNESS</div>
                        <div className="starting-screen-option">02.CROSSFIT</div>
                        <div className="starting-screen-option">03.BOXING</div>
                        <div className="starting-screen-option">04.RESISTENCIA</div>
                        <div className="starting-screen-option">05.YOGA</div>
                        <div className="starting-screen-option">06.CARDIO</div>
                    </div>
                )}

                {!isScrolling && (
                    <div className="side-button-container">
                        <button className="side-button" onClick={() => window.location.href = "/reviews"}>
                            <i className="fa-solid fa-star"></i>
                        </button>
                    </div>

                )}
            </div>
        </section>
    );
}

export default StartingScreen;
