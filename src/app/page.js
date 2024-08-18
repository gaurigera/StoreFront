import MainHeader from "@/components/header/main-header";
import ProductGrid from "@/components/product/grid";
import { getProducts } from "@/lib/api";

export const QUERY_LIMIT = 12;

export default async function Home({ searchParams }) {
  const result = await getProducts({
    query: searchParams.page
      ? `limit=${QUERY_LIMIT}&skip=${(searchParams.page - 1) * QUERY_LIMIT}`
      : ``,
  });

  return (
    <>
      <MainHeader />
      <main className="flex flex-col items-center justify-between min-h-dvh">
        <ProductGrid {...result.body} />
      </main>
    </>
  );
}
