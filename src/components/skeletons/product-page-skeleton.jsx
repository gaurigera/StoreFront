import { Skeleton } from "@/components/ui/skeleton";

export function ProductPageSkeleton() {
  return (
    <div className="flex w-full h-full p-10 mt-10">
      <div className="px-24">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
