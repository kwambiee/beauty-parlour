import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../components/product";

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.brandName] || [];

  return (
    <div>
      <p>{params.brandName}</p>
      {products.map((product) => (
        <Product
          products={product}
          id={product.id}
          name={product.name}
          brand={product.brand}
        />
      ))}
    </div>
  );
};
export default BrandPage;
