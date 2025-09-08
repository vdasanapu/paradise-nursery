import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {} },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) return;
      state.items[product.id] = { product, qty: 1 };
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;
      state.items[id].qty -= 1;
      if (state.items[id].qty <= 0) delete state.items[id];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    clearAll: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, increment, decrement, removeItem, clearAll } =
  cartSlice.actions;
export default cartSlice.reducer;
