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
    <header className="flex lg:flex items-center justify-between gap-10 px-2 shadow-md lg:px-28 sticky top-0 left-0 bg-white">
      <div>
        <h1 className="py-5 text-2xl font-bold">Logo</h1>
      </div>
      <div className="md:hidden flex gap-4">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      <nav className="">
        <div className="hidden md:flex text-black text-md gap-4 font-medium">
            {navbarItems.map((navbar) =>(
                <Link href={navbar.url} key={navbar.title}>
                    {navbar.title}
                </Link>
            ))}
        </div>

      </nav>
      <div className="hidden lg:flex flex-col lg:flex-row py-8 gap-5">
            <Link href="/signup"><button className="border-[1px] border-black bg-[#FAF9F6] text-[#000] font-semibold py-2 px-5 ">Sign Up</button></Link>
            <Link href="/login"><button className="border-[1px] border-black bg-[#000] font-semibold text-[#fff] py-2 px-5 ">Log In</button></Link>
        </div>
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
  ];
  