"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SortByFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = React.useCallback((key, value) => {
    const params = new URLSearchParams();
    params.set(key, value);

    return params.toString();
  }, []);

  return (
    <div className="flex items-center">
      <h4 className="font-bold">Sort by: </h4>
      <div className="flex gap-3 w-fit my-4 divide-x">
        <SortByItem
          name={"Relevance"}
          active={searchParams.get("sortBy") === null}
          onClick={() => {
            router.push(`${pathname}`);
          }}
        />
        <SortByItem
          name={"Price - Low to High"}
          active={searchParams.get("order") === "asc"}
          onClick={() => {
            router.push(
              "?" +
                createQueryString("sortBy", "price") +
                "&" +
                createQueryString("order", "asc")
            );
          }}
        />
        <SortByItem
          name={"Price - High to Low"}
          active={searchParams.get("order") === "desc"}
          onClick={() => {
            router.push(
              "?" +
                createQueryString("sortBy", "price") +
                "&" +
                createQueryString("order", "desc")
            );
          }}
        />
      </div>
    </div>
  );
}

const SortByItem = React.forwardRef(function SortByItem(
  { name, active, ...props },
  ref
) {
  return (
    <button
      className={cn({ underline: active }, "px-4")}
      aria-label="sort by"
      ref={ref}
      {...props}
    >
      {name}
    </button>
  );
});
