import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
        
    },
    increaseItemQty(state, action) {},
    decreaseItemQty(state, action) {},
    clearCart(state, action) {},
  },
});
