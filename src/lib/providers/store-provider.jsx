"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createCommerceStore } from "@/lib/providers/store";

export const CommerceStoreContext = createContext();

export const CommerceStoreProvider = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = createCommerceStore();
  }
  return (
    <CommerceStoreContext.Provider value={storeRef.current}>
      {children}
    </CommerceStoreContext.Provider>
  );
};

export const useCommerceStore = (selector) => {
  const commerceStoreContext = useContext(CommerceStoreContext);

  if (!commerceStoreContext)
    throw new Error(`useCommerceStore must be used within CommerceStoreProvider`);

  return useStore(commerceStoreContext, selector);
};
