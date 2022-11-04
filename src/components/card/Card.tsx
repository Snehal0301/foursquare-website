import React from 'react'
import './Card.css'

const Card = ({ details, index}: any) => {

    return (
        <div className="card">
            <div className="hotel-details">
                <img src={details.restaurant.thumb || require('../../assets/images/hotel-1.webp')} alt="Hotel Logo" />
                <div className="hotel-about">
                    <p className='hotel-title'>{index + 1}. {details.restaurant.name}</p>
                    <p className='hotel-para'>{details.restaurant.cuisines}</p>
                    <p className='hotel-para'>{details.restaurant.location.address}</p>
                </div>
            </div>
            <div className="hotel-rating">
                <div className="rating-box">
                    {
                        details.restaurant.user_rating.aggregate_rating || 4.1
                    }
                </div>
            </div>
        </div>
    )
}

export default Card