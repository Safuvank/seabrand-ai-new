import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/home/navbar/Navbar";
import Footer from "../components/home/footer/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Safe to use apostrophes inside standard JS strings
  title: "Seabrand",
  description: "Kerala's first AI strategic branding curator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. OPTIMIZATION: Added scroll-smooth so anchor links (like href="#apply") glide smoothly
    <html lang="en" className="scroll-smooth">
      {/* 2. OPTIMIZATION: Added antialiased for professional font rendering, 
          and inter.className to ensure the font is strictly applied. */}
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
