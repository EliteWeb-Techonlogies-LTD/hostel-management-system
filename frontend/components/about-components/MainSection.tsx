import Image from "next/image";
import Img from "../../public/images/ano.webp";
import Profile from "../../public/images/b5f6905ca104bb7504095636fa73bd10.jpeg";
import PriceCards from "./PriceCards";
import GetInTouch from "./GetInTouch";
import { FaCube } from "react-icons/fa6";


export default function MainSection() {
  return (
    // Find and book your stay section
    <section>

      <section className="block items-center justify-between lg:flex px-2 lg:px-10 gap-10 pb-10 text-[#000]">
        <div>
          <h1 className="text-4xl font-semibold py-2 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
            Simplify and Secure Your Booking Process With Ease
          </h1>
          <p className="py-6 text-lg lg:text-2xl text-[#000]">
            Our booking process ensures simplicity and security, making it a
            breeze to reserve your idea hostel.
          </p>
        </div>
        <div>
          <Image src={Img} alt="image" />
        </div>
      </section>

    
      {/* Pricing section  */}
      <section className="h-full w-full justify-center flex items-center text-[#000]">
        <div className="text-center">
          <small className="text-lg font-semibold text-center">
            Affordable
          </small>
          <h1 className="text-3xl lg:text-5xl font-semibold text-center py-4 text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
            Pricing Options
          </h1>
          <p className="text-lg pb-6">
            Choose from a range of affordable pricing plans
          </p>
          <button className="bg-[#1A355E] hover:text-[#FAF9F6] text-white px-5 py-2 transition ease-in-out duration-300">Monthly</button>
          <button className="border-[1px] py-[0.43rem] px-5 border-[#1A355E] transition ease-in-out duration-300">
            Yearly
          </button>
          <PriceCards />
        </div>
      </section>

      <section className="flex flex-col px-3 lg:px-36 justify-between gap-10 lg:items-center py-32 text-[#000]">
        <div className="text-center">
          <h1 className="text-4xl font-semibold py-3">
            Find Your Perfect Hostel
          </h1>
          <p className="text-md">Book a Comfortable and Affordable Hostel</p>
        </div>
        <div className="flex gap-5">
          <button className="bg-[#000] text-[#fff] px-6 py-3 text-lg transition ease-in-out duration-300">
            Reserve
          </button>
        </div>
      </section>

      {/* Faq section */}
      <section className="flex flex-col justify-between px-4 lg:flex-row lg:px-28 pt-20 gap-10 text-[#000]">
        <div className="flex-[1]">
          <h2 className="text-4xl py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
            Frequently Asked Questions
          </h2>
          <p className="py-3">
            Find answers to common questions about booking a hostel.
          </p>
          <button className="border-[1px] border-black px-5 py-2 hover:bg-[#5CB8FF] hover:border-[#1A355E] hover:text-[#FAF9F6] transition ease-in-out duration-300">
            Contact
          </button>
        </div>
        <div className="flex-[1.7]">
        
        </div>
      </section>

      <section className="flex items-center justify-center w-full h-full text-[#000]">
        <div className="text-center">
          <h1 className="font-bold text-2xl py-5">Webflow</h1>
          <h1 className="text-xl lg:text-3xl lg:w-[850px] text-center md:w-[600px] md:mx-auto font-semibold py-6 leading-snug">
            I was able to book a hostel through the website. It made the whole
            process hassle-free.
          </h1>
          <Image
            src={Profile}
            alt="image"
            className="w-[80px] h-[80px] rounded-full object-cover mx-auto"
          />
          <h1 className="pt-3 font-semibold">John Doe</h1>
          <p>Student, ABC University</p>
        </div>
      </section>

      <section className="px-3 py-40 lg:px-10 text-[#000]">
        <div className="flex flex-col justify-between lg:flex-row">
          <div>
            <h1 className="text-4xl font-semibold py-3 text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Stay updated with hostel bookings
            </h1>
            <p>Sign Up for booking confirmation and updates</p>
          </div>

          <div>
            <div className="flex gap-5 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-[1px] border-black w-full px-3 h-[50px] lg:w-[500px]"
              />
              <button className="bg-[#1A355E] text-white hover:bg-[#355d9a] hover:text-[#FAF9F6] hover:border transition ease-in-out duration-300 w-full py-4 my-4 lg:my-0 cursor-pointer lg:w-[150px]">
                Subscribe Now
              </button>
            </div>
            <p className="py-2 text-[13px] lg:text-lg">
              By subscribing, you agree to our Terms and Conditions
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 lg:px-20 pt-10 pb-12 text-[#000]">
        <div className="flex flex-col lg:flex-row gap-20 lg:justify-between items-center">
          <div>
            <small className="font-bold text-lg">Simplified</small>
            <h1 className="text-4xl font-semibold py-2 text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">Booking Process Timeline</h1>

            <div className="flex gap-10 cursor-pointer">
              <button className="border-[1px] border-black py-4 px-10 text-xl">Learn More</button>
              <button>Book Now</button>
            </div>
          </div>

          <div>
          <div className="flex">
          <div className="w-20 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <p className="text-4xl">
                <FaCube/>
              </p>
              <div className="h-20 border-l-2 border-black mt-5"></div>
            </div>
            <div className="flex flex-col items-center mt-10">
              <p className="text-4xl">
                <FaCube />
              </p>
              <div className="h-20 border-l-2 border-black mt-5"></div>
            </div>
            <div className="flex flex-col items-center mt-10">
              <p className="text-4xl">
                <FaCube />
              </p>
              <div className="h-20 border-l-2 border-black mt-5"></div>
            </div>
            <div className="mt-10">
              <p className="text-4xl">
                <FaCube />
              </p>
            </div>
          </div>
          <div className="">
            <div className="mb-28">
              <p className="font-bold text-lg mb-2">Reservation Steps</p>
              <p>
                Browse available hostels and select your prefered one.
              </p>
            </div>
            <div className="mb-28">
              <p className="font-bold text-lg mb-2">Check-In-Process</p>
              <p>
               Arrive at the hostel and complete the check-in procedure.
              </p>
            </div>
            <div className="mb-24">
              <p className="font-bold text-lg mb-2">Manage Your Booking</p>
              <p>
               View and modify your booking details at anytime.
              </p>
            </div>
            <div className="mb-20">
              <p className="font-bold text-lg mb-2">Enjoy Your Stay</p>
              <p>
                HAve a comfortable and memorable experience during your stay.
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Book and get in touch with us */}
      <section className="flex items-center justify-center w-full h-full text-center text-[#000]">
        <div>
        <small className="font-bold text-lg">Book</small>
      <h1 className="font-bold text-4xl py-4 text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">Get in Touch</h1>
      <p className="text-lg">Fill out the. form below to book your hostel</p>
        <GetInTouch />
        </div>
      </section>
    </section>
  );
}
