import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <div>
      <div key={products.id}>
        <div>
          <img
            src={products.image_link}
            onError={(e) => {
              e.target.src =
                "https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png";
            }}
          />
          <Link to='/'></Link>
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
