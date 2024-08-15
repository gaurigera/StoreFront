"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "./cart-item";
import { useCommerceStore } from "@/lib/providers/store-provider";
import BuyNow from "../product/buy-now";
import React from "react";

export default function Modal({ children }) {
  const { quantity, price, cartItems } = useCommerceStore((state) => state);
  const amount = React.useRef(quantity);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (quantity && amount.current !== quantity) {
      if (!open) setOpen(true);
      amount.current = quantity;
    }
  }, [quantity]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-screen lg:min-w-[662px]">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">My Cart</SheetTitle>
        </SheetHeader>
        <div className="divide-y-2">
          {cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                quantity={item.quantity}
                item={item.product}
              />
            );
          })}
        </div>
        <SheetFooter>
          <div className="w-full flex justify-between">
            <span>Total</span>
            <span>${price}</span>
          </div>
          <BuyNow />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
