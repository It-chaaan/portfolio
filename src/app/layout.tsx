import "./globals.css";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Christian P. Guillermo | Portfolio", description: "Computer Science Student & Software Developer" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><PortfolioLayout>{children}</PortfolioLayout></body>
    </html>
  );
}
