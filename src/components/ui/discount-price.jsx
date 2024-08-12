import { cn } from "@/lib/utils";

export const Discount = ({ children, className }) => {
  return <span className={cn("text-green-600", className)}>{children}%</span>;
};

export const OriginalPrice = ({ price, discount, className }) => {
  return (
    <span className={cn(className, "line-through")}>
      ${calculateOriginalPrice(price, discount)}
    </span>
  );
};

const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return originalPrice.toFixed(2);
};
