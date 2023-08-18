import React from 'react';
import './startRatings.css'

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const starIcons = [];
    for (let i = 0; i < fullStars; i++) {
        starIcons.push(<span key={i}>⭐</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
        starIcons.push(<span key={fullStars + i}>☆</span>);
    }

    return (
        <div className="star-rating">
        <div className="star-icons">{starIcons}</div>
        <div className="numerical-rating">{rating}</div>
    </div>
    );
};

export default StarRating;
