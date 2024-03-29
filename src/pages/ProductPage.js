/* eslint eqeqeq: 0 */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Productpage() {
  const [product, setProduct] = useState({});

  const params = useParams();
  const products = useSelector((state) => state.brands.products);

  useEffect(() => {
    const getProduct = () => {
      const newState = products.find(
        (product) => product.id == params.productId,
      );

      setProduct(newState || {});
    };
    getProduct();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            top: '-5rem',
            position: 'relative',
            left: '1rem',
            padding: '10px',
            border: 'none',
            backgroundColor: '#9c27b0',
          }}
        >
          <ArrowBackIcon />
        </button>
      </div>
      <div
        className="productPage"
        style={{
          display: 'flex',
          backgroundImage: 'url(/assets/makeup.jpg)',
          padding: '2rem',
          top: '-3rem',
          position: 'relative',
        }}
      >
        <div className="productDetails">
          <img
            src={product.image_link}
            alt="makeup product"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg';
            }}
            style={{
              height: '300px',
              borderRadius: '5px',
              marginRight: '2rem',
            }}
          />
          <p
            className="price"
            style={{
              margin: '1rem 0 0 4rem',
              backgroundColor: 'peachpuff',
              border: '2px solid transparent',
              borderRadius: '5px',
              width: '100px',
            }}
          >
            {product.price_sign}
            {product.price}
          </p>
        </div>
        <div style={{ border: '1px solid #FEC2D6' }} className="productBorder">
          <p
            style={{
              backgroundColor: '#FEC2D6',
              padding: '3rem',
              margin: '0.5rem',
              borderRadius: '5px',
            }}
            className="productDescription"
          >
            {product.description}
          </p>
        </div>
      </div>
      <div />
    </div>
  );
}
