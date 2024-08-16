import ProductCard from "./product-card";
import { EmptyBox } from "../ui/empty-box";
import SortByFilter from "../filter/sort-by";
import { ProductPagination } from "./pagination";

export default function ProductGrid(productData) {
  return productData.products.length > 0 ? (
    <section className="flex flex-col gap-8 items-center">
      <SortByFilter />
      <section className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {productData.products.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </section>
      <ProductPagination totalPages={productData.total} />
    </section>
  ) : (
    <section className="mx-auto md:flex justify-start items-center gap-10">
      <EmptyBox />
      <p className="text-3xl">All Caught Up!</p>
    </section>
  );
}
