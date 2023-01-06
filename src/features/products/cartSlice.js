import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart implementation is here...
    addToCart(state, action) {
      //if the item is already in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //if item exist
      if (existedItemIndex >= 0) {
        //increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        //add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        //add to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    //card removed
    removeFromCart(state, action) {
      const updatedCaerItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCaerItem;

      //updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
