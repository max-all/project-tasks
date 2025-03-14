import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import { ClientSessionProvider } from "@/components/ClientSessionProvider";

export const metadata: Metadata = {
  title: "Project-Tasks",
  description: "Project Tasks",
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
