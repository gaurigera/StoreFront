import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "An ecommerce app for the assignment of frontend engineer 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
