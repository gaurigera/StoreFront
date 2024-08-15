import ProductGrid from "@/components/product/grid";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({ searchParams }) {
  const products = await getProducts({
    query: searchParams,
  });

  return (
    <main className="flex flex-col items-center justify-between">
      <ProductGrid {...products.body} />
    </main>
  );
}
