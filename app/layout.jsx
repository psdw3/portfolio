'use client'
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Tugy's | Personal Portfolio",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <html lang="en" data-theme="cupcake" >
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
