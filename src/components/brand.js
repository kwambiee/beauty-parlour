import React from "react";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

const Brand = ({ name, products }) => {
  return (
    <div>
      <Link to={`/brands/${name}`}>
        <p>Brand Name: {name}</p>
        <p>Brand Products: {products.length}</p>
      </Link>
    </div>
  );
};

export default Brand;
