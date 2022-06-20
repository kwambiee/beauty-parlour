import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import brandReducer from "./BrandReducer";
import { fetchProducts } from "./BrandReducer";

const RootReducer = combineReducers({ brands: brandReducer });

const Store = configureStore(
  { reducer: RootReducer },
  applyMiddleware(thunk, logger)
);
Store.dispatch(fetchProducts());

export default Store;
