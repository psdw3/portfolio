import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Tugy's | Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" >
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
