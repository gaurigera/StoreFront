"use client";

import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SearchInput({ className }) {
  const searchParams = useSearchParams();
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const createQueryString = React.useCallback(
    (name, value) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/search?" + createQueryString("q", value));
    router.refresh()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-max-[250px] relative w-full md:w-80", className)}
    >
      <Input
        key={searchParams?.get("q")}
        placeholder={"Search Products..."}
        className="text-md rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon width={13} />
      </div>
    </form>
  );
}
