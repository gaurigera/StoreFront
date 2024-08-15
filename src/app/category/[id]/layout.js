import SortByFilter from "@/components/filter/sort-by";

export default function CategoryLayout({ children }) {
  return (
    <main className="max-w-screen-xl mx-auto mt-5 space-y-5">
      <div className="flex w-full">
        <div className="min-w-64 w-1/4"></div>
        <div className="flex flex-col mt-5 w-3/4 space-y-2">
          <SortByFilter />
          {children}
        </div>
      </div>
    </main>
  );
}
