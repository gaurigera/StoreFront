"use client";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SearchInput from "./search-input";
import { categoryData } from "./browse-category";
import Link from "next/link";

export default function MobileNav({ children, className }) {
  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetTitle className={"sr-only"}>Store</SheetTitle>
      <SheetDescription className={"sr-only"}>
        Navigation menu for store
      </SheetDescription>
      <SheetContent
        className={cn(className, "w-full overflow-auto")}
        side={"left"}
      >
        <div className="py-5 space-y-5">
          <SearchInput />
          <div className="px-5">
            {Object.keys(categoryData).map((category, index) => (
              <ListItem key={index} category={category} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = ({ category }) => {
  return (
    <div className="flex flex-col">
      {typeof categoryData[category] === "string" ? (
        <Link href={`/category/${categoryData[category]}`}>
          <h2 className="capitalize">{category}</h2>
        </Link>
      ) : (
        <div className="my-0.5">
          <h1 className="capitalize underline">{category}</h1>
          {categoryData[category].map((categry, index) => (
            <Link
              key={index}
              href={
                category === "Womens" || category === "Mens"
                  ? `/category/${category}-${categry}`
                  : `${categry}`
              }
            >
              <h2 className="pl-1.5 capitalize">{categry}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
