import "./globals.css";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Guillermo | Software Developer",
  description: "Computer Science Student & Software Developer",
  
  icons: {
    icon: "/profile.jpg",
  },
};

const themeInitializationScript = `
  try {
    const theme = localStorage.getItem('theme') || 'system';
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body><PortfolioLayout>{children}</PortfolioLayout></body>
    </html>
  );
}
