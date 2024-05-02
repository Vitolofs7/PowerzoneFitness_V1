import React, { useState } from 'react';
import fotos from "../../services/fotos/fotos";
import './imageList.css';

function ImageList() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? fotos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === fotos.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button onClick={goToPrevious} className="carousel-button prev">&#60;</button>
                <div className="image-container">
                    <img src={`/images/${fotos[currentIndex].fileName}`} alt={`imagen ${currentIndex}`} className="carousel-image" />
                    <div className="carousel-caption">
                        <div className="carousel-indicators">
                            {fotos.map((foto, index) => (
                                <span key={index} className={`dot${index === currentIndex ? ' active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={goToNext} className="carousel-button next">&#62;</button>
            </div>
        </div>
    );
}

export default ImageList;