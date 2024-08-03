"use client"

import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const metadata = {
  title: "Shecancode bootcamp",
  description: "Shecancode bootcamp is the most popular training center for girls",
};

export default function RootLayout({ children }) {
  const router = usePathname()
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (router?.startsWith('/dashboard')) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [router]);

  return (
    <html lang="en">
      {/* <Head> */}
      <head>
        <title>Shecancode</title>
        <link rel="icon" href="/logo/logo1.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=K2D&display=swap" rel="stylesheet" />
      </head>
      {/* </Head> */}
      <body className="">
        {isDashboard ? null : <Navbar />}
        <div>
          {children}
        </div>
        {isDashboard ? null : <Footer />}
      </body>
    </html>
  );
}
