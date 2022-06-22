import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import BrandPage from "./BrandPage";
import HomePage from "./Homepage";
import Productpage from "./ProductPage";
import Store from "../Redux/ConfigureStore";
import Header from "../components/Header";

const brandPage = () => (
  <Provider store={Store}>
    <BrandPage />
  </Provider>
);
const homePage = () => (
  <Provider store={Store}>
    <HomePage />
  </Provider>
);

const prodPage = () => (
  <Provider store={Store}>
    <Productpage />
  </Provider>
);

const MockPage = () => (
  <Provider store={Store}>
    <Header />
  </Provider>
);

describe("Check Brand Page", () => {
  it("renders correctly", () => {
    const component = renderer.create(<brandPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe("Check Home Page", () => {
  it("renders correctly", () => {
    const component = renderer.create(<homePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe("Check Home Page", () => {
  it("renders correctly", () => {
    const component = renderer.create(<prodPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
