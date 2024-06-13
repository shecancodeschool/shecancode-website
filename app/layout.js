import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EducationWalkSection from "@/components/EducationWalk";
import OurPartnersSection from "@/components/Partners";



const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Shecancode bootcamp",
  description: "Shecancode bootcamp is the most popular trainning center for girls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
