"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";
import { Button } from "../ui/button";

export default function AddToCart(productDetails) {
  const { addToCart } = useCommerceStore((state) => state);
  
  return (
    <Button
      variant="outline"
      onClick={() => {
        addToCart(productDetails, "plus")
      }}
    >
      Add to Cart
    </Button>
  );
}
