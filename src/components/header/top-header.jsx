"use client";

import { useTheme } from "next-themes";
import Logo from "../ui/logo";
import SearchInput from "./search-input";
import CartButton from "./cart-button";
import { cn } from "@/lib/utils";

export default function TopHeader() {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "w-full flex justify-around items-center py-2",
        theme === "light" && "bg-white",
        theme === "dark" && "bg-black"
      )}
    >
      <Logo />
      <SearchInput />
      <CartButton />
    </div>
  );
}
