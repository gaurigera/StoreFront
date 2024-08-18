import MainHeader from "@/components/header/main-header";

export default function SearchLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
