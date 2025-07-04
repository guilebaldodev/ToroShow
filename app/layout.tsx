import type { Metadata } from "next";
import "./globals.css";
import { open_sans, fredoka, lexend_deca } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Toros Mx",
  description: "Catalogo en linea de Toros Mecanicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${open_sans.className} ${fredoka.className} ${lexend_deca.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}