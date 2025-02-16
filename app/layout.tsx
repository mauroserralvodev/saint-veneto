import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const inter3 = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "SAINT VENETO ",
  description: "SAINT VENETO CLOTHING MILAN 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter3.className}>{children}</body>
    </html>
  );
}
