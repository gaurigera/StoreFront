import { ProductPagination } from "@/components/product/pagination";
import ProductCard from "@/components/product/product-card";
import { getProducts } from "@/lib/api";

export const QUERY_LIMIT = 12;

export default async function Home({ searchParams }) {
  const result = await getProducts({
    query: searchParams.page
      ? `limit=${QUERY_LIMIT}&skip=${(searchParams.page - 1) * QUERY_LIMIT}`
      : ``,
  });

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
        {result.body.products.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </section>
      <ProductPagination totalPages={result.body.total} />
    </main>
  );
}
