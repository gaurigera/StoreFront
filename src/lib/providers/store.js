"use client"

import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const asyncPersist = (config, options) => {
  const { setItem, getItem, removeItem } = options.storage;

  options.storage = {
    setItem: async (...args) => setItem(...args),
    getItem: async (...args) => getItem(...args),
    removeItem: async (...args) => removeItem(...args),
  };

  return persist(config, options);
};

export const createCommerceStore = () => {
  return create(
    asyncPersist(
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
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
