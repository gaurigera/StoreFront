import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { QuantitySelector } from "./quantity-selector";

export default function CartItem(item) {
  return (
    <div className="relative">
      <button className="absolute w-fit p-1 rounded-full z-30 bg-black/15 dark:bg-white/35 -translate-x-1">
        <Cross1Icon />
      </button>
      <div className="flex justify-between items-center my-3">
        <div className=" flex gap-1.5 items-center">
          <Image
            src={item.thumbnail}
            alt="Product Image"
            width={65}
            height={65}
            className="p-2 border-2 rounded-lg m-0.5"
          />
          <h3 className="">{item.title}</h3>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-sm">${item.price}</span>
          <div className="flex border-2 rounded-xl items-center divide-x-2 space-x-1">
            <QuantitySelector type={"minus"} />
            <span className="text-center p-3">{1}</span>
            <QuantitySelector type={"plus"} />
          </div>
        </div>
      </div>
    </div>
  );
}
