import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const nanum = Poppins({ subsets: ['latin'], weight: '400' });

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
