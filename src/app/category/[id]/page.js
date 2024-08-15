import ProductGrid from "@/components/product/grid";
import { Fetch } from "@/lib/api/fetcher";

export default async function CategoryProducts(category) {
  const result = await Fetch({
    url: `https://dummyjson.com/products/category/${category.params.id}`,
  });

  return (
    <main className="flex flex-col items-center justify-between">
      <ProductGrid {...result.body} />
    </main>
  );
}
