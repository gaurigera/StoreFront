import Logo from "../ui/logo";
import SearchInput from "./search-input";
import CartButton from "./cart-button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-menu";
import { Menu } from "lucide-react";

export default function TopHeader() {
  return (
    <div className={cn("w-full flex justify-around items-center py-2")}>
      <MobileNav className={"md:hidden"}>
        <Menu className="md:hidden" />
      </MobileNav>
      <Logo />
      <SearchInput className={"hidden md:flex"} />
      <CartButton />
    </div>
  );
}
