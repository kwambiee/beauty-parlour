import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Product from '../components/product';

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.brandName] || [];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handleClick}
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
        className="products"
        style={{
          backgroundImage: 'url(/assets/makeup.jpg)',
          top: '-3rem',
          position: 'relative',
        }}
      >
        <p style={{ display: 'none' }}>{params.brandName}</p>
        {products.map((product) => (
          <Product details={product} id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default BrandPage;
