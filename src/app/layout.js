import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header/main-header";
import { CommerceStoreProvider } from "@/lib/providers/store-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "An ecommerce app for browsing through data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full")} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommerceStoreProvider>
            {children}
          </CommerceStoreProvider>
          <div className="sticky bottom-2 left-0 m-5">
            <ModeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
