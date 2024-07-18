"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import DashboardFooter from "@/components/DashboardFooter";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/Header";


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
    <>
      <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="./logo/logo1.png" type="image/png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=K2D&display=swap" rel="stylesheet" />
      </Head>
      <body className="">
        {isDashboard?null:<Header />}
       <div>
        {children}
       </div>
       {isDashboard?null:<Footer />}
      </body>
    </html>
    </>
  );
}
