/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Brand = ({ name, products }) => (
  <div>
    <Link to={`/brands/${name}`}>
      <p>
        Brand Name:
        {name}
      </p>
      <p>
        Brand Products:
        {products.length}
      </p>
    </Link>
  </div>
);
Brand.propTypes = {
  name: propTypes.string.isRequired,
  products: propTypes.string.isRequired,
};

export default Brand;
