import { Sidebar } from "./components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <MobileNav />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}