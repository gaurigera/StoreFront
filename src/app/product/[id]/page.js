import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Rating from "@/components/ui/rating";
import { Discount, OriginalPrice } from "@/components/ui/discount-price";
import { StoreIcon } from "lucide-react";
import Review from "@/components/product/review";
import { cn } from "@/lib/utils";
import AddToCart from "@/components/product/add-to-cart";
import BuyNow from "@/components/product/buy-now";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getProduct } from "@/lib/api";
import Price from "../../../components/ui/price";

export default async function Product(parameters) {
  const result = await getProduct(parameters.params.id);
  const productDetails = result.body;

  return (
    <div className="flex flex-col gap-3 md:flex-row w-full h-full min-h-svh pr-10 mt-10">
      <div className="md:sticky md:top-24 h-fit">
        <div className="px-24">
          {productDetails.images.length > 1 ? (
            <Carousel>
              <CarouselContent className="max-w-[240px]">
                {productDetails.images.map((image, index) => (
                  <CarouselItem className="w-fit aspect-square" key={index}>
                    <Suspense
                      fallback={<Skeleton className={"w-[240px] h-[240px]"} />}
                    >
                      <Image
                        width={400}
                        height={400}
                        src={image}
                        alt={productDetails.title}
                      />
                    </Suspense>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <Image
              width={300}
              height={300}
              src={productDetails.images[0]}
              alt={productDetails.title}
            />
          )}
        </div>
        <div className="border-2 p-4 rounded-lg mx-6 space-y-3">
          <div className="space-y-0.5">
            <h2 className="text-xl">Product Details</h2>
            <hr />
          </div>
          <ProductDetail k={"Weight"} value={productDetails.weight} />
          <div className="flex gap-2 text-sm">
            <span className="font-bold">Dimensions</span>
            <div className="space-x-1">
              <span>{productDetails.dimensions.width}</span>
              <span>x</span>
              <span>{productDetails.dimensions.height}</span>
              <span>x</span>
              <span>{productDetails.dimensions.depth}</span>
            </div>
          </div>
          <ProductDetail
            k={`Warranty Information`}
            value={productDetails.warrantyInformation}
          />
          <ProductDetail
            k={`Availability Status`}
            value={productDetails.availabilityStatus}
            className={cn(
              "px-1 rounded-md",
              productDetails.availabilityStatus === "In Stock"
                ? "text-green-700 bg-green-200"
                : "text-red-700 bg-red-400/10"
            )}
          />
          <ProductDetail
            k={`Warranty`}
            value={productDetails.warrantyInformation}
          />
          <ProductDetail
            k={`Return Policy`}
            value={productDetails.returnPolicy}
          />
        </div>
      </div>
      <div className="px-12 md:px-0 md:flex-1 space-y-2">
        <div className="flex justify-between">
          <div className="flex gap-1.5">
            <h2 className="text-3xl">{productDetails.title}</h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Rating className="bg-green-600">{productDetails.rating}</Rating>
            <span>{productDetails.reviews.length} Reviews</span>
          </div>
        </div>
        <p>{productDetails.description}</p>
        <div className="flex gap-3 items-baseline">
          <Price
            className="text-2xl font-semibold"
            price={productDetails.price}
          />
          <span className="line-through">
            <OriginalPrice
              price={productDetails.price}
              discount={productDetails.discountPercentage}
            />
          </span>
          <Discount>{productDetails.discountPercentage}</Discount>
        </div>
        <GuaranteeSticker />
        <div className="flex py-5 w-full">
          <div className="ml-auto flex gap-4">
            <AddToCart
              productDetails={productDetails}
              disabled={productDetails.availabilityStatus === "Out of Stock"}
            />
            <BuyNow
              productDetails={productDetails}
              disabled={productDetails.availabilityStatus === "Out of Stock"}
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <div className="space-y-4 divide-y-2 divide-blue-50">
          {productDetails.reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductDetail = ({ k, value, className }) => {
  return (
    <div className="flex gap-2 text-sm">
      <span className="font-bold">{k}</span>
      <span className={cn(className)}>{value}</span>
    </div>
  );
};

const GuaranteeSticker = () => {
  return (
    <div className="flex items-center gap-0.5 bg-gray-950 text-white w-fit p-0.5 rounded-lg">
      <StoreIcon width={15} />
      <span className="text-xs">Guaranteed</span>
    </div>
  );
};
