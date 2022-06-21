import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "../components/Details";

export default function Detailspage() {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.details] || [];
  console.log(products);

  return (
    <div>
      <p>{params.details}</p>
      {products.map((product) => (
        <Details products={product} id={product.id} />
      ))}
    </div>
  );
}
