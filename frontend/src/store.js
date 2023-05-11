import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productListReducer } from "./reducers/productReducer";
const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const store = configureStore({ reducer, initialState });

export default store;
