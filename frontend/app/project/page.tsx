import { FaCube } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaWebflow } from "react-icons/fa6";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";


import Image from "next/image";
import Host from "../../public/images/host.jpg";
import Navbar from "@/components/home-components/Navbar";
import Footer from "@/components/home-components/Footer";

export default function ExploreMore() {
  return (
    <>
    <Navbar/>
    <div>
      {/*Welcome Text */}
      <div className="ml-4 mb-24">
        <h1 className="text-4xl font-bold mb-5">Welcome To HostelBook</h1>
        <p>
          Discover and book the perfect hostel near your university with ease.
        </p>
      </div>

      {/*About Our website: With Image */}
      <div className="ml-4 mb-20 lg:flex justify-between lg:gap-20 mr-5">
        <div className="mb-10 lg:order-2 lg:flex lg:flex-1 lg:items-center ">
          <div>
            <div>
              <p className="text-6xl mb-8">
                <FaCube />
              </p>
              <h1 className="text-4xl font-bold mb-5">
                About Our Website: Solving Hostel Needs.
              </h1>
              <p>
                Our Website was created to address the needs of students and
                hostel managers. We provide a platform where students can easily
                find and book hostels near their university, while also helping
                hostel managers efficiently to manage their properties.
              </p>
            </div>
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
        <div className="lg:order-1">
          <Image src={Host} alt="" />
        </div>
      </div>

      {/*Meet Our Team: We're hiring */}
      <div className="ml-4 mb-3">
        <div className="mb-10 w-72 lg:w-full">
          <p className="text-sm font-bold mb-5">Seamless</p>
          <h1 className="text-4xl font-bold mb-5">Meet Our Team</h1>
          <p>
            Dedicated professionals committed to providing a seamless hostel
            booking experience.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./male.jpg" />
            <p className="font-bold">John Doe</p>
            <p className="mb-2">CEO</p>
            <p>
              With over 10 years of experince in the hospitality industry, John
              leads our team with passion and expertise
            </p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./female.jpg" />
            <p className="font-bold">Jane Smith</p>
            <p className="mb-2">CTO</p>
            <p>
              Jane is a tech-savvy professional who ensures our platform is
              always up-to-date and user friendly.
            </p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./male.jpg" />
            <p className="font-bold">Micheal Johnson</p>
            <p className="mb-2">Marketing Manager</p>
            <p>
              Micheal&apos;s creative marketing strategies help us reach a wider
              audience and drive bookings.
            </p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./female.jpg" />
            <p className="font-bold">Emily Davies</p>
            <p className="mb-2">Customer Support Specialist</p>
            <p>
              Emily is dedicated to providing exceptional customer support and
              ensuring smooth booking process for all customers.
            </p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./hiring.jpg" />
            <p className="font-bold">We&apos;re hiring</p>
            <p>
              Join our team and be part of the seamless hostel booking
              experience.
            </p>
            <p className="mb-5 mt-4">Open Position</p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img className="w-10 rounded-full" src="./hire.jpg" />
            <p className="font-bold">Full Name</p>
            <p className="mb-2">Job title</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              quidem itaque recusandae molestias ipsa dicta non error?
            </p>
            <div className="flex gap-3 mt-4 text-xl">
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <TbWorld />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-bold mb-3">We&apos;re Hiring</p>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
            Open Position
          </button>
        </div>
      </div>

      {/*Recognition and Awards */}
      <div className="mt-16 ml-4 mr-4 lg:flex justify-between">
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-4xl mb-5">Recognition and Awards</h1>
            <p>Discover why we are trusted by thousands of students.</p>
            <div className="w-96 flex mt-5 gap-4">
              <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
                Learn More
              </button>
              <button className="flex items-center gap-3 transition ease-in-out duration-300">
                Sign Up <GoChevronRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="flex items-center gap-2 bg-gray-300 px-2 py-4 lg:px-10 lg:py-4">
              <FaWebflow />
              <p>Webflow</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-300 px-2 py-4 lg:px-10 lg:py-4">
              <FaWebflow />
              <p>Webflow</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold mt-2">
            <div className="flex items-center gap-2 bg-gray-300 p-4 lg:px-12 lg:py-4">
              <FaCube />
              <p>Relume</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-300 p-4 lg:px-12 lg:py-4">
              <FaCube />
              <p>Relume</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold mt-2">
            <div className="flex items-center gap-2 bg-gray-300 px-2 py-4 lg:px-10 lg:py-4">
              <FaWebflow />
              <p>Webflow</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-300 px-2 py-4 lg:px-10 lg:py-4">
              <FaWebflow />
              <p>Webflow</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold mt-2">
            <div className="flex items-center gap-2 bg-gray-300 p-4 lg:px-12 lg:py-4">
              <FaCube />
              <p>Relume</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-300 p-4 lg:px-12 lg:py-4">
              <FaCube />
              <p>Relume</p>
            </div>
          </div>
        </div>
      </div>

      {/*Logos Slider */}
      <div className="ml-4 mt-10 lg:mt-28 mb-20">
        <div className="font-bold mb-10 lg:text-center">
          <p>Trusted by universities and organizations worldwide</p>
        </div>
        <div>
          <div className="flex overflow-hidden space-x-16">
            <div className="flex gap-10  justify-center animate-loop-scroll">
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10  justify-center animate-loop-scroll arial-hidden">
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaWebflow />
                  </span>
                  <p className="font-bold text-2xl">Webflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">
                    <FaCube />
                  </span>
                  <p className="font-bold text-2xl">Relume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Discover with Image*/}
      <div className="ml-4 my-20 lg:flex justify-between mr-5">
        <div className="mb-10 lg:flex items-center lg:w-2/5">
          <div>
            <div>
              <p className="text-6xl mb-8">
                <FaCube />
              </p>
              <h1 className="text-4xl font-bold mb-5">
                Discover the Benefits of Our Website
              </h1>
              <p>
                Our Website provides a supportive community for students and
                hostel managers, offering a range of benefits. With our
                platform, students can easily find and book hostels near their
                university, while hostel managers can efficiently manage their
                properties and keep track of students.
              </p>
            </div>
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
        <div>
          <img src="./host.jpg" />
        </div>
      </div>

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

      {/*Oir journey towards excellence */}
       <div className="ml-4 lg:flex justify-between mt-20">
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
      <div className="ml-4 mb-32 mt-10 lg:mt-32 lg:flex justify-between">
        <div>
          <h1 className="font-bold text-3xl mb-5">
            Experience the best hostel life
          </h1>
          <p>Book your ideal hostel and enjoy a comfortable stay</p>
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
