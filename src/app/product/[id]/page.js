import { Fetch } from "@/lib/api/fetcher";
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

export default async function Product(parameters) {
  const result = await Fetch({
    url: `https://dummyjson.com/products/${parameters.params.id}`,
  });
  const productDetails = result.body;

  return (
    <div className="flex w-full h-full pr-10 mt-10">
      <div className="px-24 sticky top-24 h-fit">
        {productDetails.images.length > 1 ? (
          <Carousel>
            <CarouselContent className="max-w-[240px]">
              {productDetails.images.map((image, index) => (
                <CarouselItem className="w-fit aspect-square" key={index}>
                  <Image
                    width={400}
                    height={400}
                    src={image}
                    alt={productDetails.title}
                  />
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
      <div className="flex-1 space-y-2">
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
          <span className="text-2xl font-semibold">
            ${productDetails.price}
          </span>
          <span className="line-through">
            <OriginalPrice
              price={productDetails.price}
              discount={productDetails.discountPercentage}
            />
          </span>
          <Discount>{productDetails.discountPercentage}</Discount>
        </div>
        <GuaranteeSticker />
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

const GuaranteeSticker = () => {
  return (
    <div className="flex items-center gap-0.5 bg-gray-950 text-white w-fit p-0.5 rounded-lg">
      <StoreIcon width={15} />
      <span className="text-xs">Guaranteed</span>
    </div>
  );
};
