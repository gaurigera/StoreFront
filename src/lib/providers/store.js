import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export const createCommerceStore = () => {
  return createStore()(
    immer((set) => ({
      cartItems: [],
      addToCart: (product) => {
        set((state) => {
          state.cartItems.push(product);
        });
      },
      removeFromCart: (product) => {
        set((state) => {
          const ind = state.cartItems.findIndex(product);
          state.cartItems.splice(ind, 1);
        });
      },
    }))
  );
};
