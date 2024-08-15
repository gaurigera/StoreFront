import SortByFilter from "@/components/filter/sort-by";

export default function CategoryLayout({ children }) {
  return (
    <main className="max-w-screen-lg mx-auto mt-5 space-y-5">
      {children}
    </main>
  );
}
