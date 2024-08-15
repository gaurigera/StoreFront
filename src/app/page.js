import ProductCard from "@/components/product/product-card";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const result = await getProducts({query: ""});

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
        {result.body.products.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </section>
    </main>
  );
}
