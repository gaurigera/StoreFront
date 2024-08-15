"use client"

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

export default function Modal({ children }) {
    
  return (
    <Sheet >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetHeader></SheetHeader>
      <SheetContent>

      </SheetContent>
      <SheetFooter></SheetFooter>
    </Sheet>
  );
}
