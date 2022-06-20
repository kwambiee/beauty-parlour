import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import BrandReducer from "./BrandReducer";

const RootReducer = combineReducers({ BrandReducer });

const Store = configureStore(
  { reducer: RootReducer },
  applyMiddleware(thunk, logger)
);

export default Store;
