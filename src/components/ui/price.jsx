import { cn } from "@/lib/utils";

/**
 * For proper formatting of price as per its currency
 */
export default function Price({ price, currency = "USD", className }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);

  return <span className={cn(className)}>{formattedPrice}</span>;
}
