import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <div
        style={{
          display: "flex",
          margin: "0 15%",
        }}
      >
        <div>
          <img
            src={product.image_link}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg";
            }}
            style={{
              height: "300px",
              borderRadius: "5px",
              marginRight: "2rem",
            }}
          />
          <p
            style={{
              margin: "1rem 0 0 4rem",
              backgroundColor: "peachpuff",
              border: "2px solid transparent",
              borderRadius: "5px",
              width: "100px",
            }}
          >
            {product.price_sign}
            {product.price}
          </p>
          <div>
            {/* {product.tag_list.map((tag) => {
              <span>{tag}</span>;
            })} */}
          </div>
        </div>
        <div style={{ border: "1px solid #FEC2D6" }}>
          <p
            style={{
              width: "500px",
              backgroundColor: "#FEC2D6",
              padding: "3rem",
              margin: "0.5rem",
              borderRadius: "5px",
            }}
          >
            {product.description}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
