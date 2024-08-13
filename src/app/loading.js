import { ProductCardSkeleton } from "@/components/skeletons/product-card-skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </section>
    </main>
  );
}
