import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import { ClientSessionProvider } from "@/components/ClientSessionProvider";

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
    <ClientSessionProvider>
      <html lang="pt-BR">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClientSessionProvider>
  );
}
