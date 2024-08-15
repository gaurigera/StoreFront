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
import { Button } from "../ui/button";
import { useCommerceStore } from "@/lib/providers/store-provider";

export default function Modal({ children }) {
  const { cartItems } = useCommerceStore((state) => state);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-screen lg:min-w-[662px]">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">My Cart</SheetTitle>
        </SheetHeader>
        <div className="divide-y-2">
          {cartItems.map((item, index) => {
            return <CartItem {...item} key={index} />;
          })}
        </div>
        <SheetFooter>
          <div className="w-full flex justify-between">
            <span>Total</span>
            <span>$8.99</span>
          </div>
          <Button>Buy Now</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
