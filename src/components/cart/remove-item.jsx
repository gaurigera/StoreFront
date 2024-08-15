"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";

export default function RemoveItem({ item, children }) {
  const { removeFromCart } = useCommerceStore((state) => state);
  return (
    <button
      className="absolute w-fit p-1 rounded-full z-30 bg-black/15 dark:bg-white/35 -translate-x-1"
      onClick={() => {
        removeFromCart(item);
      }}
    >
      {children}
    </button>
  );
}
