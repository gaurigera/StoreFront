import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header/main-header";
import { CommerceStoreProvider } from "@/lib/providers/store-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "An ecommerce app for the assignment of frontend engineer 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommerceStoreProvider>
            <MainHeader />
            {children}
            <div className="absolute bottom-0 left-0 m-5">
              <ModeToggle />
            </div>
          </CommerceStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
