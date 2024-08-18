"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";

import { useToast } from "@/components/ui/use-toast";

export default function AddToCart({ productDetails, ...props }) {
  const { addToCart } = useCommerceStore((state) => state);
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        addToCart(productDetails, "plus");
        toast({
          title: "Item Added!",
          description: `${productDetails.title}`,
          action: (
            <ToastAction
              altText="undo addition to cart"
              onClick={() => {
                addToCart(productDetails, "minus");
              }}
            >
              Undo
            </ToastAction>
          ),
        });
      }}
      {...props}
    >
      Add to Cart
    </Button>
  );
}
