import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "../context/providers";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Resume",
  description: "Welcome to my resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
