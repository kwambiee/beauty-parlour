import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ products, id }) => {
  console.log(id);
  return (
    <div>
      <Link to='/'>
        <div key={id}>
          <div>
            <p>
              {products.price_sign}
              {products.price}
            </p>
            <p>{products.description}</p>
          </div>
        </div>
        ;
      </Link>
    </div>
  );
};
export default ProductItem;
