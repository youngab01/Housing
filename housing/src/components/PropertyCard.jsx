import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ image, title, link }) {
  return (
    <div className="property-card-wrapper">
      <Link to={link} className="text-decoration-none">
        <img src={image} alt={title} />
        <div className="property-overlay">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default PropertyCard;