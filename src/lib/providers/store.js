import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export const createCommerceStore = () => {
  return createStore()(
    immer((set) => ({
      price: 0.0,
      quantity: 0,
      cartItems: [],
      addToCart: (product) => {
        set((state) => {
          const { id } = product;

          const ind = state.cartItems.findIndex(
            (item) => item.product.id === id
          );

          if (ind === -1)
            state.cartItems.push({ product: product, quantity: 1 });
          else state.cartItems[ind].quantity += 1;

          state.quantity += 1;

          console.log(state.cartItems);
        });
      },
      removeFromCart: (product) => {
        set((state) => {
          const { id } = product;

          const ind = state.cartItems.findIndex(
            (item) => item.product.id === id
          );
          state.cartItems.splice(ind, 1);
        });
      },
    }))
  );
};
