import MainHeader from "@/components/header/main-header";

export default function CategoryLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
