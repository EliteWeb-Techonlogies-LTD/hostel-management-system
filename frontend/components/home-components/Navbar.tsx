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


MyComponent();

  
  return (
    <>
    <header className="block lg:flex items-center gap-10 px-2 lg:border-b-[1px] border-slate-500">
      <div>
        <h1 className="py-5 text-2xl font-bold">Logo</h1>
      </div>

      <nav className="flex flex-col lg:flex-row lg:items-center justify-between w-full ">
        <ul className="flex flex-col lg:flex-row gap-5 text-lg">
          <li><Link href="/">Explore Hostels</Link></li>
          <li><Link href="/booking">Book Now</Link></li>
          <li><Link href="/faq">Contact Us</Link></li>
          <li id="dropDownBtn" className="flex cursor-pointer">More Options<MdKeyboardArrowDown className="text-2xl mt-1" /></li>
        </ul>

        {/* // DropDown */}

    <section id="dropDownMobile" className="hidden ml-4 lg:hidden">
        
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


    </section>


        <div className="flex flex-col lg:flex-row py-8 gap-5">
          <button className="border-[1px] border-black bg-white py-2 px-5">Sign Up</button>
          <button className="border-[1px] border-black bg-black text-white800 py-2 px-5">Log In</button>
        </div>
      </nav>
      
    </header>


    <section id="dropDownLarge" className="hidden">
    
    <div  className="ml-4 lg:mt-1 lg:pl-12 lg:flex lg:gap-12 lg:border-t-2 lg:border-b-2 lg:border-black lg:border-opacity-50 lg:border-solid lg:max-h-[380px] lg:w-full">
        
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