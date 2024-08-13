"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";
import { ShoppingCartIcon } from "lucide-react";

export default function CartButton() {
  const {cartItems} = useCommerceStore((state) => state);  

  return (
    <button className="flex-row-reverse justify-end">
      <div className="flex items-center justify-center bg-blue-400 text-white rounded-full aspect-square w-4 h-4 text-xs translate-y-2 translate-x-4">
        {cartItems.length}
      </div>
      <ShoppingCartIcon />
    </button>
  );
}
