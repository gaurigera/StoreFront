"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import * as React from "react";

export const categoryData = {
  electronics: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  mens: ["shirts", "shoes", "watches"],
  accessories: ["sports-accessories", "sunglasses", "tops"],
  vehicles: ["motorcycle", "vehicle"],
  womens: ["bags", "dresses", "jewellery", "shoes", "watches"],
  beauty: "beauty",
  fragrances: "fragrances",
  furniture: "furniture",
  groceries: "groceries",
  "home Decoration": "home-decoration",
  kitchen: "kitchen-accessories",
  skin: "skin-care",
};

export default function BrowseCategory() {
  return (
    <>
      <NavigationMenu className="mx-auto hidden lg:flex">
        <NavigationMenuList>
          {Object.keys(categoryData).map((category, index) => {
            return typeof categoryData[category] != "string" ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="capitalize">
                  {category}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 grid-cols-2 lg:w-[600px]">
                    {categoryData[category].map((categry) => (
                      <ListItem
                        key={categry}
                        title={categry}
                        href={
                          category === "womens" || category === "mens"
                            ? `/category/${category}-${categry}`
                            : `${categry}`
                        }
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <Link
                  href={`/category/${categoryData[category]}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn("capitalize ", navigationMenuTriggerStyle())}
                  >
                    {category}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent capitalize hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";