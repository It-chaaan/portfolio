import "./globals.css";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Guillermo | Software Developer",
  description: "Computer Science Student & Software Developer",
  
  icons: {
    icon: "/profile.png",
  },
};
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
