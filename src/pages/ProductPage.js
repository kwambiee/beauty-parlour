import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "../components/Details";
import { fetchProduct } from "../Redux/BrandReducer";

export default function Productpage() {
  const [product, setProduct] = useState({});

  const params = useParams();
  const products = useSelector((state) => state.brands.products);

  // const products = brandNames[params.productId] || [];
  console.log(products);

  useEffect(() => {
    const getProduct = () => {
      const newState = products.find(
        (product) => product.id == params.productId
      );

      setProduct(newState || {});
    };
    getProduct();
  }, []);

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}
