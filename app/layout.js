import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Courses from "@/components/CourseList";
import HomeSloganSection from "@/components/HomeSloganSection";
import Header from "@/components/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shecancode bootcamp",
  description: "Shecancode bootcamp is the most popular trainning center for girls",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
}
