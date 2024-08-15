import SortByFilter from "../filter/sort-by";
import BrowseCategory from "./browse-category";
import TopHeader from "./top-header";

export default function MainHeader() {
  return (
    <header className="w-full divide-y sticky top-0 z-50 bg-white dark:bg-black">
      <TopHeader />
      <BrowseCategory />
    </header>
  );
}
