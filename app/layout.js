import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EducationWalkSection from "../components/EducationWalk";
import OurPartnersSection from "../components/Partners";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Shecancode bootcamp",
  description: "Shecancode bootcamp is the most popular trainning center for girls",
};

export default function RootLayout({ children }) {
  return (
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
       <Header />
       <div>
        {children}
       </div>
        <Footer />
      </body>
    </html>
  );
}
