import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import BrandPage from './BrandPage';
import HomePage from './Homepage';
import Productpage from './ProductPage';
import Store from '../Redux/ConfigureStore';

export const brandPage = () => (
  <Provider store={Store}>
    <BrandPage />
  </Provider>
);
export const homePage = () => (
  <Provider store={Store}>
    <HomePage />
  </Provider>
);

export const prodpage = () => (
  <Provider store={Store}>
    <Productpage />
  </Provider>
);

describe('Check Brand Page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<brandPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Check Home Page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<homePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Check Home Page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<prodPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
