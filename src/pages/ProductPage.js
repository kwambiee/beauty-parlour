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
    const getProduct = async () => {
      try {
        // const newState = products.filter(
        //   (product) => product.id === params.productId
        // );

        // console.log(product.id);
        setProduct({ ...product, newState });
        // let result = await fetchProduct(params.productId);
        // console.log(result);
        // setProduct(result.data);
      } catch (error) {
        console.log("error");
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      {/* <p>{params.productId}</p> */}
      {/* {products.map((product) => (
        <ProductItem products={product} id={product.id} />
      ))} */}
    </div>
  );
}
