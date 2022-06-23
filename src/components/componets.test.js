import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Brand from './brand';
import Product from './product';
import Header from './Header';
import Store from '../Redux/ConfigureStore';

export const brandProvider = () => (
  <Provider store={Store}>
    <Brand />
  </Provider>
);

export const headerProvider = () => (
  <Provider store={Store}>
    <Header />
  </Provider>
);

export const productProvider = () => (
  <Provider store={Store}>
    <Product />
  </Provider>
);

describe('Check Brand Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<brandProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
describe('Check header Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<headerProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
describe('Check product Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<productProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

test('Link matches snapshot', () => {
  const component = renderer.create(
    <Router>
      <Link to="/" />
    </Router>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
