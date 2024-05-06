import './StartingScreen.css';

function StartingScreen() {
    return (
        <section className="starting-screen-start">
            
            <div className="starting-screen-section-content">

                <div className="starting-screen-info">
                    <h2>HAZ QUE <span className="starting-screen-RedTxt">OCURRA</span></h2>
                    <p>Triunfar es más fácil de lo que piensas !</p>
                    <a href="#about-us" className="starting-screen-more-btn">
                        <i className="fa-solid fa-circle-chevron-down"></i>
                    </a>
                </div>

                <div className="starting-screen-options">
                    <div className="starting-screen-option">
                        01.FITNESS
                    </div>
                    <div className="starting-screen-option">
                        02.CROSSFIT
                    </div>
                    <div className="starting-screen-option">
                        03.BOXING
                    </div>
                    <div className="starting-screen-option">
                        04.RESISTENCIA
                    </div>
                    <div className="starting-screen-option">
                        05.YOGA
                    </div>
                    <div className="starting-screen-option">
                        06.CARDIO
                    </div>

                </div>
            </div>

        </section>
    )
}

export default StartingScreen;