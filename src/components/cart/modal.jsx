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
import useStore from "@/lib/useStore";

export default function Modal({ children }) {
  const quantity = useStore(useCommerceStore, (state) => state.quantity);
  const price = useStore(useCommerceStore, (state) => state.price);
  const cartItems = useStore(useCommerceStore, (state) => state.cartItems);

  const amount = React.useRef(quantity);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (amount.current !== quantity && quantity > 0) {
      if (amount.current != undefined && !open) setOpen(true);
      amount.current = quantity;
    }
  }, [open, quantity]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-screen lg:min-w-[662px]">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">My Cart</SheetTitle>
        </SheetHeader>
        <div className="divide-y-2">
          {cartItems &&
            cartItems.map((item, index) => {
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
            <span>${price && price.toFixed(2)}</span>
          </div>
          <BuyNow />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
