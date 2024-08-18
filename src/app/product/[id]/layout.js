import MainHeader from "@/components/header/main-header";

export default function ProductLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
