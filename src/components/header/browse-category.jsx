"use client";

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
import { cn } from "@/lib/utils";

const data = {
  Electronics: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  Mens: ["shirts", "shoes", "watches"],
  Accessories: ["sports-accessories", "sunglasses", "tops"],
  Vehicles: ["motorcycle", "vehicle"],
  Womens: ["bags", "dresses", "jewellery", "shoes", "watches"],
  Beauty: "beauty",
  Fragrances: "fragrances",
  Furniture: "furniture",
  Groceries: "groceries",
  "Home Decoration": "home-decoration",
  Kitchen: "kitchen-accessories",
  Skin: "skin-care",
};

export default function BrowseCategory() {
  return (
    <>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          {Object.keys(data).map((category, index) => {
            return typeof data[category] != "string" ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {data[category].map((category) => (
                      <ListItem
                        key={category}
                        title={category}
                        href={`/category/${category}`}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <Link
                  href={`/category/${data[category]}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
ListItem.displayName = "ListItem";
