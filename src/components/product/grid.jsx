import ProductCard from "./product-card";
import { EmptyBox } from "../ui/empty-box";

export default function ProductGrid(productData) {
  return productData.products.length > 0 ? (
    <section className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {productData.products.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </section>
  ) : (
    <section className="mx-auto md:flex items-center gap-10">
      <EmptyBox />
      <p className="text-3xl">All Caught Up!</p>
    </section>
  );
}
