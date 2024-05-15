import React, { useState, useEffect } from 'react';
import './SeeReviewsScreen.css';
import RateService from "../../services/firebase/suggestions.service.js";

function SeeReviewsScreen() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editedReview, setEditedReview] = useState(null);

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = () => {
        RateService.getAllRates()
            .then((rates) => {
                setReviews(rates);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    const deleteReview = (reviewId) => {
        RateService.deleteRate(reviewId)
            .then(() => {
                setReviews(reviews.filter(review => review.id !== reviewId));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const editReview = (review) => {
        setEditedReview(review);
    };

    const updateReview = (reviewId, updatedReview) => {
        RateService.updateRate(reviewId, updatedReview.name, updatedReview.rate)
            .then(() => {
                setReviews(reviews.map(review => review.id === reviewId ? updatedReview : review));
                setEditedReview(null); 
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const cancelEdit = () => {
        setEditedReview(null); 
    };

    return (
        <div className="see-reviews-container">
            <h1>Reseñas</h1>
            {isLoading ? (
                <p>Cargando reseñas...</p>
            ) : reviews.length === 0 ? (
                <p>No hay reseñas disponibles.</p>
            ) : (
                <ul className="reviews-list">
                    {reviews.map((review, index) => (
                        <li key={index}>
                            {editedReview && editedReview.id === review.id ? (
                                <div>
                                    <input type="text" value={editedReview.name} onChange={(e) => setEditedReview({ ...editedReview, name: e.target.value })} />
                                    <input type="text" value={editedReview.rate} onChange={(e) => setEditedReview({ ...editedReview, rate: e.target.value })} />
                                    <button className="animated-button" onClick={() => updateReview(editedReview.id, editedReview)}>Guardar</button>
                                    <button className="animated-button" onClick={cancelEdit}>Cancelar</button>
                                </div>
                            ) : (
                                <div className='items'>
                                    <p><strong>Nombre:</strong> {review.name}</p>
                                    <p><strong>Reseña:</strong> {review.rate}</p>
                                    <button className="animated-button" onClick={() => deleteReview(review.id)}>Eliminar</button>
                                    <button className="animated-button" onClick={() => editReview(review)}>Editar</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SeeReviewsScreen;
