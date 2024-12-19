"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <header className="flex lg:flex items-center justify-between gap-10 px-10 lg:shadow-sm lg:px-28 sticky top-0 left-0 bg-white h-[70px]">
      <div>
        <h1 className="text-2xl font-bold text-[#332590]">Logo</h1>
      </div>
     

      <nav className="">
        <div className="hidden md:flex text-black text-md gap-4 font-medium">
            {navbarItems.map((navbar) =>(
                <Link href={navbar.url} key={navbar.title} className="">
                    {navbar.title}
                </Link>
            ))}
        </div>

      </nav>
      <div className="hidden lg:flex flex-col lg:flex-row py-8 gap-5">
            <Link href="/signup"><button className="border-[1px] border-[#332590] text-[#332590] hover:shadow-lg transition ease-in-out duration-300 font-semibold py-2 px-5 rounded-full">Sign Up</button></Link>
            <Link href="/login"><button className="border-[1px] border-[#332590] bg-[#332590] hover:border-[#332590] hover:bg-[#4836bd] transition ease-in-out duration-300 font-semibold text-[#fff] py-2 px-5 rounded-full ">Log In</button></Link>
        </div>
        <div className="lg:hidden flex gap-4">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen &&(
          <div className="bg-white h-screen w-full z-20 fixed top-20 left-0">
            <nav className="flex flex-col gap-5 px-10">
              <div className="flex flex-col gap-5 w-full text-black ">
              {navbarItems.map((navbar) =>(
                <Link href={navbar.url} key={navbar.title}>
                    {navbar.title}
                </Link>
            ))}
              </div>

              <div className="flex flex-col gap-5">
              <Link href="/signup"><button className="border-[1px] w-full border-black bg-[#FAF9F6] text-[#000] font-semibold py-2 px-5 ">Sign Up</button></Link>
            <Link href="/login"><button className="border-[1px] w-full border-black bg-[#000] font-semibold text-[#fff] py-2 px-5 ">Log In</button></Link>
              </div>
            </nav>
          </div>
        )}
    </header>
  </>
  
  
  );
}

const navbarItems = [
    {
      title: "Explore Hostels",
      url: "/",
    },
    {
      title: "Book Now",
      url: "/booking",
    },
    {
      title: "Contact Us",
      url: "/contactus",
    },
    {
      title: "Faq",
      url: "/faq",
    },
    {
      title: "Blog",
      url: "/blog-page",
    },
    {
      title: "More Options",
      url: "",
    },
  ];
  