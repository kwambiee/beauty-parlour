import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products, name, brand, id }) => {
  console.log(id);
  return (
    <div>
      <Link to={`/${brand}/${name}`}>
        <div key={id}>
          <div>
            <img
              src={products.image_link}
              onError={(e) => {
                e.target.src =
                  "https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png";
              }}
            />
          </div>
          <div>
            <h2>{products.name}</h2>
            <span></span>
            {/* <p>
            {products.price_sign}
            {products.price}
          </p>
          <p>{products.description}</p> */}
          </div>
        </div>
        ;
      </Link>
    </div>
  );
};
export default Product;
