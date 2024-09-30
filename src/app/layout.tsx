import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Julien Leray's Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanum.className}>{children}</body>
    </html>
  );
}
