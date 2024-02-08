import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counter";
import itemsSlice from "../slices/items/itemsSlice";
import cartSlice from "../slices/cart/cartSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    items: itemsSlice,
    cart: cartSlice,
  },
});

export default store;