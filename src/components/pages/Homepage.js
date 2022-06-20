import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import makeUpDeits from "./Detailspage";
import Card from "react-bootstrap/Card";
import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";

const HomePage = () => {
  const brandNames = useSelector((state) => state.brands);
  console.log(brandNames);

  return (
    <>
      <div>
        <Routes>
          <Route
            to='/'
            element={
              <div>
                {brandNames.map((brand) => (
                  <NavLink key={brand[0]} to={`makeupdeits/$brand[0]`}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>{brand[0]}</Card.Title>
                        <div>
                          <FiArrowRightCircle className='arrow-icon' />
                        </div>
                        <Card.Text> Makeup Products :{brand[1]}</Card.Text>
                      </Card.Body>
                    </Card>
                  </NavLink>
                ))}
              </div>
            }
          ></Route>
          <Route path='/makeupdeits/:brand' element={<makeUpDeits />} />
        </Routes>
      </div>
    </>
  );
};
export default HomePage;
