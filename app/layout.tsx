import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MaterialSymbolsLoader from "./components/MaterialSymbolsLoader";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Linn Htut Khaung - Contemporary Piano",
  description: "Contemporary pianist and composer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} font-display bg-background-dark text-text-main antialiased selection:bg-primary selection:text-black`}
      >
        <MaterialSymbolsLoader />
        {children}
      </body>
    </html>
  );
}
