import { StoreIcon } from "lucide-react";
import SearchInput from "./search-input";
import Link from "next/link";
import CartButton from "./cart";
import BrowseCategory from "./browse-category";

function Logo() {
  return (
    <Link href={`/`}>
      <div className="flex gap-2">
        <StoreIcon />
        <h1 className="font-semibold">Store</h1>
      </div>
    </Link>
  );
}

export default function MainHeader() {
  return (
    <header className="w-full divide-y sticky top-0 bg-white z-50">
      <div className="w-full flex justify-around items-center py-2">
        <Logo />
        <SearchInput />
        <CartButton />
      </div>
      <>
        <BrowseCategory />
      </>
    </header>
  );
}
