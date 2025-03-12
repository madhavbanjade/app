import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "item", // ✅ Changed to "cart" to match the slice name
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // ✅ Increment quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // ✅ Add new item
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

// ✅ Export actions
export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
