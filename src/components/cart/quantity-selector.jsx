"use client";

import { useCommerceStore } from "@/lib/providers/store-provider";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

function SubmitButton({ item, type }) {
  const { addToCart } = useCommerceStore((state) => state);

  return (
    <button
      type="submit"
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      className={cn(
        "ease flex h-full lg:min-w-[16px] max-w-[32px] flex-none items-center justify-center p-2 transition-all",
        {
          "ml-auto": type === "minus",
        }
      )}
      onClick={() => {
        addToCart(item, type);
      }}
    >
      {type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}

export function QuantitySelector({ item, type, optimisticUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <SubmitButton type={type} item={item} />
    </form>
  );
}
