import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../components/product';

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.brandName] || [];

  return (
    <div className="products">
      <p style={{ display: 'none' }}>{params.brandName}</p>
      {products.map((product) => (
        <Product details={product} id={product.id} key={product.id} />
      ))}
    </div>
  );
};
export default BrandPage;
