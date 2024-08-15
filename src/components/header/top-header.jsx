import Logo from "../ui/logo";
import SearchInput from "./search-input";
import CartButton from "./cart-button";
import { cn } from "@/lib/utils";

export default function TopHeader() {
  return (
    <div
      className={cn(
        "w-full flex justify-around items-center py-2"
      )}
    >
      <Logo />
      <SearchInput />
      <CartButton />
    </div>
  );
}
