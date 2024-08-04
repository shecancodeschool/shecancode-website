import Image from "next/image";
import LogoImage from "../../public/logo/logo1.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('load', () => {
      console.log(window.innerWidth);
      
      setScreenSize(window.innerWidth);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-0 border-none text-white'} w-full max-w-screen-2xl mx-auto z-50 fixed border-b`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href={'/'}>
            <Image src={LogoImage} alt="" className="h-9 w-auto md:cursor-pointer" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoCloseSharp /> : <IoMenuSharp />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <li>
            <Link href="/" className="py-7 font-bold px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>

        {/* Mobile nav  */}
        <ul className={`
            md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar