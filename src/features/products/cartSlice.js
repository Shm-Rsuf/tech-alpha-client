import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
      }
      //add to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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

    //clear cart
    clearCart(state, action) {
      state.cartItems = [];
      //updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //decrease cart
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //if index is available
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
      }
      //updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //total price calculation
    getSubtotal(state, action) {
      const subtotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;
        acc += itemTotal;
        return acc;
      }, 0);

      state.cartTotalAmount = subtotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubtotal,
} = cartSlice.actions;
export default cartSlice.reducer;
