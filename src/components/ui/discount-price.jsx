import { cn } from "@/lib/utils";
import Price from "./price";

export const Discount = ({ children, className }) => {
  return <span className={cn("text-green-600", className)}>{children}%</span>;
};

export const OriginalPrice = ({ price, discount, className }) => {
  return (
    <Price
      className={cn(className, "line-through")}
      price={calculateOriginalPrice(price, discount)}
    />
  );
};

const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return originalPrice.toFixed(2);
};
