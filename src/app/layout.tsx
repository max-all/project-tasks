import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Teste Title",
  description: "Teste Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
