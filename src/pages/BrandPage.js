import React from "react";
import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import Product from "../components/product";

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.brandName];
  console.log(products);

  return (
    <div>
      {products.map((product) => {
        <Product products={product} />;
      })}
      <Outlet />
    </div>
  );
};
export default BrandPage;
