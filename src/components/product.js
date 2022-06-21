import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <div>
      <div key={products.id}>
        <div>
          <span>{products.image_link}</span>
          <Link to='/'>Back arrow</Link>
        </div>
        <div>
          <h2>{products.name}</h2>
          <p>
            {products.price_sign}
            {products.price}
          </p>
          <p>{products.description}</p>
        </div>
      </div>
      ;
    </div>
  );
};
export default Product;
