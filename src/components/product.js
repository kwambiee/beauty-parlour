import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ details, id }) => (
  <div>
    <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
      <div key={id} style={{ paddingBottom: '1rem', marginBottom: '1rem' }}>
        <div>
          <img
            src={details.image_link}
            alt="Brand products"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg';
            }}
            style={{ width: '300px', height: '300px' }}
            className="image"
          />
        </div>
        <div>
          <h2
            className="Producttitle"
            style={{
              fontWeight: '700',
              fontSize: '25px',
              color: 'white',
              width: '300px',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            {details.name}
          </h2>
          <span
            className="More"
            style={{
              color: 'black',
              padding: '0.5rem',
              margin: '3rem 0 1rem 6rem',
              border: '2px solid #fff',
            }}
          >
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  </div>
);
export default Product;
