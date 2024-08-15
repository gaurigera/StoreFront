import Image from "next/image";
import AddToCart from "./add-to-cart";
import Link from "next/link";
import { Discount, OriginalPrice } from "../ui/discount-price";

export default async function ProductCard(productDetails) {
  return (
    <div className="shadow p-1.5 group max-w-64 lg:max-w-56 flex flex-col items-center space-y-2">
      <Link href={`/product/${productDetails.id}`} target="_blank">
        <Image
          width={250}
          height={250}
          src={productDetails.thumbnail}
          alt={productDetails.title}
        />
        <div className="group-hover:-translate-y-3 transform duration-300 ease-in-out p-2 w-full">
          <div className="mx-auto w-fit">
            <p className="max-w-24 md:max-w-36 lg:max-w-44 overflow-hidden text-ellipsis text-nowrap">
              {productDetails.title}
            </p>
            {productDetails.discountPercentage > 0 ? (
              <div className="space-x-1">
                <span className="font-semibold">${productDetails.price}</span>
                <OriginalPrice
                  className={`text-xs`}
                  price={productDetails.price}
                  discount={productDetails.discountPercentage}
                />
                <Discount className="text-xs">
                  {productDetails.discountPercentage}
                </Discount>
              </div>
            ) : (
              <span className="font-semibold">${productDetails.price}</span>
            )}
          </div>
        </div>
      </Link>
      <AddToCart {...productDetails} />
    </div>
  );
}
