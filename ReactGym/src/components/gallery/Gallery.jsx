import ImageList from '../image-list/imageList';
import './Gallery.css';

function Gallery() {
    return (

        <section className="gallery" id="gallery">
            <div className="section-content">
                <div class="title-container">
                    <div class="number">
                        03
                    </div>
                    <div class="info">
                        <span class="phrase">LA MEJOR EXPERIENCIA</span>
                        <h2>GALERIA</h2>
                    </div>
                </div>
                <ImageList />
            </div>
        </section>
    )
}

export default Gallery;