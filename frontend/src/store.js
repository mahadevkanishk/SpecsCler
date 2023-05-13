import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  cart: { cartItems: cartItemsFromStorage },
};

const store = configureStore({ reducer, preloadedState });

export default store;
