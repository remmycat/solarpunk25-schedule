import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solarpunk 25 Schedule",
  description: "Unofficial Schedule to the Solarpunk Conference 2025",
  authors: [{ name: "Remmy Cat", url: "https://github.com/remmycat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
