import React from "react";
import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const brands = brandNames[params.brandName];
  console.log(brands);

  return (
    <div>
      {brands.map((brand) => {
        <div key={brand.id}>
          <span>{brand.image_link}</span>
          <div>
            <h2>{brand.name}</h2>
            <p>
              {brand.price_sign} {brand.price}
            </p>
            <p>{brand.description}</p>
          </div>
        </div>;
      })}
      <p />
      <Outlet />
    </div>
  );
};
export default BrandPage;
