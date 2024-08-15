import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const createCommerceStore = () => {
  return createStore()(
    persist(
      immer((set) => ({
        price: 0.0,
        quantity: 0,
        cartItems: [],
        addToCart: (product) => {
          set((state) => {
            if (!product) return;
            const { id } = product;

            const ind = state.cartItems.findIndex(
              (item) => item.product.id === id
            );

            if (ind === -1) state.cartItems.push({ product, quantity: 1 });
            else state.cartItems[ind].quantity += 1;

            state.quantity += 1;
            state.price += product.price;
          });
        },
        removeFromCart: (product) => {
          set((state) => {
            if (!product) return;

            const { id } = product;

            const ind = state.cartItems.findIndex(
              (item) => item.product.id === id
            );

            if (ind === -1) return;

            const removedPrice =
              state.cartItems[ind].product.price *
              state.cartItems[ind].quantity;

            state.price -= removedPrice.toFixed(2);

            state.quantity -= state.cartItems[ind].quantity;
            if (state.quantity === 0) state.price = 0.0;

            state.cartItems.splice(ind, 1);
          });
        },
      })),
      {
        name: "cart-storage",
      }
    )
  );
};
