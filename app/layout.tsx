import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "YourStore",
  description: "By cool products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-blue-200">
        <Navbar />
        <main className="flex grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
