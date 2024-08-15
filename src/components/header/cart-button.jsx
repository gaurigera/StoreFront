"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";
import { ShoppingCartIcon } from "lucide-react";
import Modal from "../cart/modal";

export default function CartButton() {
  const { cartItems } = useCommerceStore((state) => state);

  return (
    <Modal>
      <button className="flex-row-reverse justify-end m-1">
        <div className="flex items-center justify-center bg-blue-400 text-white rounded-full aspect-square w-4 h-4 text-xs translate-y-2 translate-x-4">
          {cartItems.length}
        </div>
        <ShoppingCartIcon />
      </button>
    </Modal>
  );
}
