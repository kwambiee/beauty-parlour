import React from 'react';
import { useSelector } from 'react-redux';
import Brand from '../components/brand';

const HomePage = () => {
  const brandNames = useSelector((state) => state.brands.brands);

  return (
    <>
      <div>
        {Object.keys(brandNames).map((brand) => (
          <Brand
            key={brand[brand.id]}
            name={brand}
            products={brandNames[brand]}
          />
        ))}
      </div>
    </>
  );
};
export default HomePage;
