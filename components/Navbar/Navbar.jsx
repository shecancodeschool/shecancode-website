import Image from "next/image";
import LogoImage from "../../public/logo/logo1.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className={`${(scrolled && screenSize <= 796) ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-0 border-none text-white'} w-full max-w-screen-2xl mx-auto z-50 fixed border-b`}>
    <nav className={`${scrolled && 'bg-white bg-opacity-100'} ${!scrolled && 'bg-white bg-opacity-0 border-none text-white'} w-full max-w-screen-2xl mx-auto z-50 fixed border-b`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href={'/'} onClick={() => setOpen(false)}>
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
          <NavLinks toggleOpen={toggleOpen} />
        </ul>
        <div className="md:block hidden">
          <Link href={'/contact-us'} onClick={toggleOpen} className='bg-[#317ACC] hover:bg-[#296494] text-white font-bold py-2 px-6 rounded-md'>
            Contact Us
          </Link>
        </div>

        {/* Mobile nav  */}
        <div className={`
            md:hidden bg-white absolute w-full h-full bottom-0 overflow-y-scroll py-24 pl-0
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}>
          <div className="flex flex-col bg-white text-black w-full fixed top-10 py-10 px-10">
            <Link href="/" className="py-7 inline-block font-bold" onClick={toggleOpen}>
              Home
            </Link>
            <NavLinks toggleOpen={toggleOpen} />
            <div className="py-5">
              <Link href={'/contact-us'} onClick={toggleOpen} className='bg-[#317ACC] hover:bg-[#296494] text-white font-bold py-2 px-6 rounded-md'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar