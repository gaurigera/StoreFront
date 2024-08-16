"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SortByFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = React.useCallback(
    (key1, key2, value1, value2) => {
      const params = new URLSearchParams(searchParams);
      params.set(key1, value1);
      params.set(key2, value2);

      return params.toString();
    },
    [searchParams]
  );

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
              "?" + createQueryString("sortBy", "order", "price", "asc")
            );
          }}
        />
        <SortByItem
          name={"Price - High to Low"}
          active={searchParams.get("order") === "desc"}
          onClick={() => {
            router.push(
              "?" + createQueryString("sortBy", "order", "price", "desc")
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
