import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { QuantitySelector } from "./quantity-selector";
import RemoveItem from "./remove-item";
import Price from "../ui/price";
import Link from "next/link";

export default function CartItem({ quantity, item }) {
  return (
    <div className="relative">
      <RemoveItem item={item} key={item}>
        <Cross1Icon />
      </RemoveItem>
      <div className="flex justify-between items-center my-3">
        <div className=" flex gap-1.5 items-center">
          <Image
            src={item.thumbnail}
            alt="Product Image"
            width={65}
            height={65}
            className="p-2 border-2 rounded-lg m-0.5"
          />
          <Link href={`/product/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <Price className="text-sm" price={item.price * quantity} />
          <div className="flex border-2 rounded-xl items-center divide-x-2 space-x-1">
            <QuantitySelector type={"minus"} item={item} />
            <span className="text-center p-3">{quantity}</span>
            <QuantitySelector type={"plus"} item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
