import ProductGrid from "@/components/product/grid";
import { getProductsInCategory } from "@/lib/api";

export default async function CategoryProducts({ params, searchParams }) {
  const result = await getProductsInCategory({ id: params.id, query: searchParams });
  
  return (
    <main className="flex flex-col items-center justify-between">
      <ProductGrid {...result.body} />
    </main>
  );
}
