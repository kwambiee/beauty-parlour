/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./brand.css";
import Header from "./Header";

const Brand = ({ name, products }) => (
  <div className='brands'>
    <div>
      <Link to={`/brands/${name}`}>
        <h1>{name}</h1>
        <h2>
          Products:
          {products.length}
        </h2>
      </Link>
    </div>
  </div>
);
Brand.propTypes = {
  name: propTypes.string.isRequired,
  products: propTypes.string.isRequired,
};

export default Brand;
