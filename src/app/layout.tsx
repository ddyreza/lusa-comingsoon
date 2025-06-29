import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "../components";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming soon",
  description: "This page is under construction.",
  authors: [{ name: "Lusa" }],
  openGraph: {
    title: "Lusa - Developer & Creator",
    locale: "id",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-light-bg dark:bg-gradient-dark min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Theme Toggle Button – pojok kanan atas */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
