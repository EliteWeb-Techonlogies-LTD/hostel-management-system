"use client";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import Himage from "@/public/images/h-image.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { useEffect } from 'react';
// import styles from "./Navbar.module.css";

export default function Navbar (){
  
  const MyComponent = () => { 
    useEffect(() => { 
      const dropDownMobile = document.getElementById("dropDownMobile");
      const dropDownLarge = document.getElementById("dropDownLarge"); 
      const dropDownBtn = document.getElementById("dropDownBtn"); 
      if (dropDownBtn) { 
        dropDownBtn.addEventListener("click", () => { 
          if (window.innerWidth >= 1024) { 
            // Large screens 
            if (dropDownLarge) { 
              dropDownLarge.classList.toggle("hidden");
            } 
          } else { 
            // Mobile screens 
            if (dropDownMobile) { 
              dropDownMobile.classList.toggle("hidden");
            }
          }
        }); 
      } 
    }, [])
  };

//   logo will move 20px or 5rem
// Nav Items will be in the middle of the screen
// dropdown will have no border top and bottom, but will have a shadow and a pull out
// dropdown on mobile will flex both featured items and products.
//  Reduce the hero section medium text to be in the middle of the hero section topic.
// hero section will have a background image and a gradient overlay.
// get updates will not have a border
// faq will be in the middle as well has still have a question 
// spaces must be on the main
//  footer will flex the two sub-links 
// DARK MODE IN Tailwind

MyComponent();

  
  return (
    <>
    <header className="block lg:flex items-center justify-center gap-10 px-2 lg:border-b-[1px] border-slate-500 lg:px-28 bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
      <div>
        <h1 className="py-5 text-2xl font-bold">Logo</h1>
      </div>

      <nav className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:ml-40">
        <ul className="flex flex-col lg:flex-row gap-5 text-lg font-semibold text-white">
          <li><Link href="/">Explore Hostels</Link></li>
          <li><Link href="/booking">Book Now</Link></li>
          <li><Link href="/faq">Contact Us</Link></li>
          <li><Link href="/faq">Faq</Link></li>
          <li><Link href="/faq">Blog</Link></li>
          <li id="dropDownBtn" className="flex cursor-pointer">More Options<MdKeyboardArrowDown className="text-2xl mt-1" /></li>
        </ul>

        {/* // DropDown */}

    <section id="dropDownMobile" className="hidden ml-4 lg:hidden">
        
        <div className="flex flex-row justify-evenly">
            {/* Popular Hostels Div */}
        <div className="my-8 flex flex-col gap-3 lg:w-3/12">
            <span className="font-semibold">Popular Hostels</span>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Hostel One</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Check Availability</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Hostel Two</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Room Types</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                    <a href=""><span className="font-semibold">Hostel Three</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Facilities</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                    <a href=""><span className="font-semibold">Hostel Four</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Reviews</span></a>
                </div>
            </div>
        </div>

        {/* Featured Articles Div */}
        <div className="my-8 flex flex-col gap-3 lg:w-3/12">
            <span className="font-semibold">Featured Articles</span>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Article One</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Read More</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Article Two</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Read More</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Article Three</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Read More</span></a>
                </div>
            </div>
            <div className="flex gap-3">
                <FaCube className="mt-[6px]" />
                <div className="flex flex-col">
                <a href=""><span className="font-semibold">Article Four</span>
                    <span className="font-medium text-text-decoration-none hidden lg:block">Read More</span></a>
                </div>
            </div>
        </div>
        </div>

        {/* Latest Blog Posts Div */}
        <div className="bg-slate-200 p-8 flex flex-col gap-5 mr-4 lg:mr-0 lg:w-5/12">
            <span className="font-semibold">Latest Blog Posts</span>
            <div className="lg:flex lg:flex-row lg:gap-4">
                <Image src={Himage} alt="" className="lg:w-[100px] lg:h-[80px] lg:mt-3" />
                <div className="flex flex-col gap-1 mt-3 lg:mt-0">
                    <span className="font-semibold">Post Title One</span>
                    <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <a href="" className="text-decoration-underline">Read More</a>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-4">
                <Image src={Himage} alt="" className="lg:w-[100px] lg:h-[80px] lg:mt-3" />
                <div className="flex flex-col gap-1 mt-3 lg:mt-0">
                    <span className="font-semibold">Post Title Two</span>
                    <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <a href="" className="text-decoration-underline">Read More</a>
                </div>
            </div>
            <div className="flex gap-2 cursor-pointer">
                <a href="" className="text-decoration-none">View All</a>
                <MdKeyboardArrowRight className="text-2xl" />
            </div>
        </div>


    </section>


        <div className="flex flex-col lg:flex-row py-8 gap-5">
            <Link href="/signup"><button className="border-[1px] border-black bg-[#FAF9F6] text-[#1A355E] font-semibold py-2 px-5 hover:bg-gradient-to-l from-[#4A90E2] to-[#1A355E] hover:text-[#FAF9F6] transition ease-in-out duration-300">Sign Up</button></Link>
            <Link href="/login"><button className="border-[1px] border-black bg-[#1A355E] font-semibold text-[#FAF9F6] py-2 px-5 hover:bg-[#FAF9F6] hover:text-[#1A355E] hover:border-[#1A355E] transition ease-in-out duration-300">Log In</button></Link>
        </div>
      </nav>
      
    </header>


    <section id="dropDownLarge" className="hidden">
    
    <div  className="ml-4 lg:mt-1 lg:pl-12 lg:flex lg:gap-12 z-50 shadow-2xl shadow-slate-200 lg:max-h-[380px] lg:w-full">
        
    {/* Popular Hostels Div */}
    <div className="my-8 flex flex-col gap-3 lg:w-3/12">
        <span className="font-semibold">Popular Hostels</span>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Hostel One</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Check Availability</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Hostel Two</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Room Types</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Hostel Three</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Facilities</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Hostel Four</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Reviews</a>
            </div>
        </div>
    </div>

    {/* Featured Articles Div */}
    <div className="my-8 flex flex-col gap-3 lg:w-3/12">
        <span className="font-semibold">Featured Articles</span>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Article One</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Read More</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Article Two</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Read More</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Article Three</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Read More</a>
            </div>
        </div>
        <div className="flex gap-3">
            <FaCube className="mt-[6px]" />
            <div className="flex flex-col">
                <span className="font-semibold">Article Four</span>
                <a href="" className="font-medium text-text-decoration-none hidden lg:block">Read More</a>
            </div>
        </div>
    </div>

    {/* Latest Blog Posts Div */}
    <div className="bg-slate-200 p-8 flex flex-col gap-5 mr-4 lg:mr-0 lg:w-5/12">
        <span className="font-semibold">Latest Blog Posts</span>
        <div className="lg:flex lg:flex-row lg:gap-4">
            <Image src={Himage} alt="" className="lg:w-[100px] lg:h-[80px] lg:mt-3" />
            <div className="flex flex-col gap-1 mt-3 lg:mt-0">
                <span className="font-semibold">Post Title One</span>
                <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="" className="text-decoration-underline">Read More</a>
            </div>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4">
            <Image src={Himage} alt="" className="lg:w-[100px] lg:h-[80px] lg:mt-3" />
            <div className="flex flex-col gap-1 mt-3 lg:mt-0">
                <span className="font-semibold">Post Title Two</span>
                <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="" className="text-decoration-underline">Read More</a>
            </div>
        </div>
        <div className="flex gap-2 cursor-pointer">
            <a href="" className="text-decoration-none">View All</a>
            <MdKeyboardArrowRight className="text-2xl" />
        </div>
    </div>


</div>

    
    </section>
  </>
  
  
  );
}