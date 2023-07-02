import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Nav from "@/components/nav/nav";
import BootstrapImportComponent from "@/components/bootstrapImport/bootstrapImport";
import FooterComponent from "@/components/footer/footer";

export const metadata = {
  title: "Environmental App",
  description: "Aplicación ambiental en base a legislación Mexicana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} data-bs-theme="">
        <Nav />
        {children}
        <FooterComponent />
        <BootstrapImportComponent />
      </body>
    </html>
  );
}
