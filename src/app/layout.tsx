import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/layout.css";
import "@/styles/home.css";
import "@/styles/auth.css";
import "@/styles/responsive.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "ByteSpace — Learn without limits",
  description: "Discover courses, build practical skills, and grow with expert creators.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
