import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { FaCube } from "react-icons/fa6";
import { FaWebflow } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";

import Navbar from "@/components/home-components/Navbar";
import Footer from "@/components/home-components/Footer";
import AboutHero from "@/components/about-components/AboutHero";
import AboutSection from "@/components/about-components/AboutSection";
import AboutTeam from "@/public/AboutTeam";
import Awards from "@/components/about-components/Awards";
import LogoSlider from "@/components/about-components/LogoSlider";
import Benefits from "@/components/about-components/Benefits";

export default function ExploreMore() {
  return (
    <>
    <Navbar/>
    <div>
      <AboutHero/>
      <AboutSection/>
      <AboutTeam/>
      <Awards/>
      <LogoSlider/>
      <Benefits/>
    

      {/*Image div slider */}
      <div className="my-32">
        <div className="flex justify-between items-center m-5">
          <div className="text-5xl hidden lg:block">
            <PiArrowCircleLeftThin />
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-4xl">
                <FaWebflow />
              </span>
              <p className="font-bold text-2xl">Webflow</p>
            </div>
            <div>
              <p className="font-bold text-lg">
                The hostel website has made it so easy for me to find and book a
                hostel near my university. It&apos;s a convenient and reliable
                platform.
              </p>
            </div>
            <div className="flex flex-col items-center mt-5">
              <img className="w-10 rounded-full mb-5" src="./male.jpg" />
              <p>John doe</p>
              <p>Student, ABC University</p>
            </div>
          </div>
          <div className="text-5xl hidden lg:block">
            <PiArrowCircleRightThin />
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <div
            className="cursor-pointer w-4 h-4 rounded-full bg-gray-300"
            id="radio1"
          ></div>
          <div
            className="cursor-pointer w-4 h-4 rounded-full bg-gray-300"
            id="radio2"
          ></div>
          <div
            className="cursor-pointer w-4 h-4 rounded-full bg-gray-300"
            id="radio3"
          ></div>
          <div
            className="cursor-pointer w-4 h-4 rounded-full bg-gray-300"
            id="radio4"
          ></div>
          <div
            className="cursor-pointer w-4 h-4 rounded-full bg-gray-300"
            id="radio5"
          ></div>
        </div>
      </div>

      {/*Our journey towards excellence */}
       <div className="px-2 lg:px-14 lg:flex justify-between mt-20">
        <div className="lg:w-1/4">
          <div className="mb-16">
            <p className="font-bold">Experience</p>
            <h1 className="text-3xl font-bold">
              Our Journey Towards Excellence and Growth
            </h1>
            <div className="w-96 flex mt-5 gap-4 lg:mt-16">
              <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
                Learn More
              </button>
              <button className="flex items-center gap-3 transition ease-in-out duration-300">
                Sign Up <GoChevronRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 lg:w-2/5 mr-5">
          <div className="w-20 flex flex-col items-center">
            <div className="flex flex-col items-center">
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
            <div className="mb-20">
              <p className="font-bold text-lg mb-2">Milestone Achieved</p>
              <p>
                Established as the go-to hostel booking platform for students.
              </p>
            </div>
            <div className="mb-20">
              <p className="font-bold text-lg mb-2">Commitment to Service</p>
              <p>
                Continuously improving our services to meet the needs of
                students and hostel managers.
              </p>
            </div>
            <div className="mb-20">
              <p className="font-bold text-lg mb-2">Expnading Reach</p>
              <p>
                Partnering with more hostels to provide a wider range of options
                for students.
              </p>
            </div>
            <div className="mb-20">
              <p className="font-bold text-lg mb-2">Customer Satisfaction</p>
              <p>
                Delivering exceptional service and ensuring a comfortable stay
                for every student.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Experience the best text */}
      <div className="ml-4 mb-32 mt-10 lg:mt-32 lg:flex items-center justify-center flex-col">
        <div>
          <h1 className="font-bold text-3xl mb-5 text-center">
            Experience the best hostel life
          </h1>
          <p className="w-full lg:w-[300px] mx-auto text-center">Book your ideal hostel and enjoy a comfortable stay</p>
        </div>
        <div className="flex gap-5 mt-5 lg:mr-10">
          <button className="bg-black py-2 px-10 text-white hover:border-2 hover:border-black hover:text-black hover:bg-inherit transition ease-in-out duration-300">
            Explore
          </button>
          <button className="border-2 border-black px-10 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
