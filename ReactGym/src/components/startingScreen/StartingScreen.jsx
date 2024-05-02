import './StartingScreen.css';

function StartingScreen() {
    return (

        <section id="start" class="start">
            <div class="section-content">
                <div class="info">
                    <h2>HAZ QUE <span class="RedTxt">OCURRA</span></h2>
                    <p>Triunfar es más fácil de lo que piensas !</p>
                    <a href="#about-us" class="more-btn">
                        <i class="fa-solid fa-circle-chevron-down"></i>
                    </a>
                </div>
                <div class="options">
                    <div class="option">
                        01.FITNESS
                    </div>
                    <div class="option">
                        02.CROSSFIT
                    </div>
                    <div class="option">
                        03.BOXING
                    </div>
                    <div class="option">
                        04.ENDURANCE
                    </div>
                    <div class="option">
                        05.YOGA
                    </div>
                    <div class="option">
                        06.CARDIO
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartingScreen;