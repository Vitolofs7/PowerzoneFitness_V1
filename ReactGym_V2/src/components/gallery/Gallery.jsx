import ImageList from '../image-list/ImageList';
import './Gallery.css';

function Gallery() {
    return (

        <section className="gallery" id="gallery">
            <div className="section-content">
                <div className="title-container">
                    <div className="number">
                        03
                    </div>
                    <div className="info">
                        <span className="phrase">LA MEJOR EXPERIENCIA</span>
                        <h2>GALERIA</h2>
                    </div>
                </div>
                <ImageList />
            </div>
        </section>
    )
}

export default Gallery;