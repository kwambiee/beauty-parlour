import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import BrandReducer from "./makeupReducer";

const RootReducer = combineReducers({ Brand: BrandReducer });

const Store = configureStore(
  { reducer: RootReducer },
  applyMiddleware(thunk, logger)
);

export default Store;
