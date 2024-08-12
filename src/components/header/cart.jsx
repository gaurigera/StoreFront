import { ShoppingCartIcon } from "lucide-react";

export default function CartButton() {
  return (
    <button className="flex-row-reverse justify-end">
      <div className="flex items-center justify-center bg-blue-400 text-white rounded-full aspect-square w-4 h-4 text-xs translate-y-2 translate-x-4">
        12
      </div>
      <ShoppingCartIcon />
    </button>
  );
}
