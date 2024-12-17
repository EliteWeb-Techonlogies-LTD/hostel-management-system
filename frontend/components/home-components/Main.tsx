import { FaCube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import Himage from "@/public/images/h-image.jpg";
import Image from "next/image";
import Img from "../../public/images/ano.webp";
import Img2 from "../../public/images/img.webp";
import Img3 from "../../public/images/agoo-hostel.jpg";
import Script from "next/script";
import QuestionPage from "./FaqHomePage";
import { IoIosArrowForward } from "react-icons/io";
import {
  Carousel,
  initTWE,
} from "tw-elements";
initTWE({ Carousel });

import '../../public/css/style.css';
// import '../../public/js/carousel.js';
// import {
//   Carousel,
//   initTWE,
// } from "tw-elements";
// initTWE({ Carousel });


export default function Main() {

  
  
  return (
    <section className="">
      {/* <!-- TW Elements styles--> */}
    {/* <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" /> */}

      

      {/* <!-- TW Elements JavaScript --> */}
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></Script>


      <div>
        {/* First Hero section for the main page */}
        <div className="h-[85vh] pt-36 hero">
          <h1 className="text-5xl lg:text-7xl lg:w-[850px] text-center md:w-[600px] md:mx-auto font-extrabold py-6 leading-snug text-[#FAF9F6]" >
            Find the perfect hostel for your stay
          </h1>
          <p className="text-lg text-white text-center text-wrap py-2 lg:max-w-2/5">
            Welcome to our hostel booking website. Discover a wide range of
            affordable and convenient hostels near your university.
          </p>

          <div className="flex gap-5 justify-center w-full py-10 text-[#FAF9F6]">
            <button className="bg-[#1A355E] border-[1px] border-[#1A355E] py-2 px-5 rounded-[2px] font-semibold text-xl hover:bg-inherit hover:text-[#FAF9F6] transition ease-in-out duration-300">
              Explore
            </button>
            <button className="py-2 px-2 bg-[#4a90e2] border-[1px] border-[#4A90E2] font-semibold text-xl  rounded-[2px] hover:bg-inherit hover:text-[#FAF9F6] hover:border-[1px] hover:border-black transition ease-in-out duration-300">
              Learn More
            </button>
          </div>
        </div>


        {/* the section about the simplified way of looking for hostels */}
        <div className="xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10  text-[#1A355E]">
          <div className="flex-[1] ">
            <small className="font-semibold text-lg text-[#1A355E]">Simplified</small>
            <h1 className="md:text-5xl text-4xl font-bold py-3 md:w-[600px] leading-[67px] w-[340px] text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Find and Book your Ideal Hostel
            </h1>
            <p className="text-xl leading-loose w-[350px] md:w-[600px]">
              Booking a hostel has never being easier. Follow our step-by-step
              guide to secure your accommodation hassle-free.
            </p>
            <div className="lg:flex gap-10 items-center py-5">
              <div>
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-xl font-bold pb-5 text-[#1A355E]">Easy Booking</h1>
                <p>
                  Browse through a wide selection of hostels near your
                  university.
                </p>
              </div>
              <div>
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-xl font-bold pb-5 text-[#1A355E]">Convenient Options</h1>
                <p>
                  Choose from different amenities and room types to suit your
                  preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-10 pb-10">
            <button className="bg-[#fff] border-[1px] border-[#1A355E] text-[#1A355E] py-2 px-5 rounded-[2px] font-semibold text-xl hover:bg-[#4A90E2] hover:text-[#FAF9F6] transition ease-in-out duration-300">
              Explore
            </button>
            <button className="py-2 px-2 bg-[#4A90E2] border-[1px] border-[#1A355E] text-[#FAF9F6] font-semibold text-xl rounded-[2px] hover:text-[#f3eee0] hover:border-[1px] transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-300">
              Learn More
            </button>
            </div>
          </div>
          <div className="flex-[1.5]">
            <Image src={Img} alt="" className="h-[60vh]" />
          </div>
        </div>

        {/* The section talking about secured our bookings are  */}
        <div className="xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10 text-[#1A355E]">
          <div>
            <div>
              <h1 className="text-3xl font-semibold py-3 text-[#1A355E]">Secure Bookings</h1>
              <p className="text-[16px]">
                Easily book and reserve hostels with out secure online platform.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold py-3 text-[#1A355E]">Wide Selection</h1>
              <p className="text-[16px]">
                Choose from a wide variety of hostels to the find the perfect
                accommodation for your needs.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold py-3 text-[#1A355E]">Management Tools</h1>
              <p className="text-[18px]">
                Hostels Managers can easily keep track of students and
                efficiently manage their accommodations.
              </p>
            </div>
          </div>
          <div className="py-5">
            <Image src={Img2} alt="" />
          </div>
        </div>

        {/* The convenience of the hostel website */}
        <div className="xl:flex items-center gap-16 md:px-[4rem] py-2 px-5 bg-gradient-to-l from-[#4A90E2] to-[#1A355E] text-[#FAF9F6]">
          <div className="w-[50%] leading-loose">
            <small className="font-bold text-lg text-[#cda330]">Convenience</small>
            <h1 className="md:text-5xl text-4xl font-bold pt-5 pb-8 md:w-[600px] leading-[67px] w-[340px]">
              Find the Perfect Hostel for You
            </h1>
            <p className="pb-7 text-xl leading-loose w-[350px] md:w-[600px] text-gray-300">
              Our hostel website offers students the Convenience of easily
              finding and booking the perfect accommodation near their
              university. With a wide variety of hostels to choose from,
              students can find a lace that suits heir needs and preferences.
              Plus, our services s affordable, ensuring that students can find a
              hostel that fit their budget.
            </p>

            <div className="flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5">
              <button className="border-[1px] border-black py-2 px-3 font-bold text-xl bg-white text-[#1A355E] transform hover:scale-105 transition ease-in-out duration-300">
                Learn More
              </button>
              <button className="flex items-center justify-center text-[#cda330] gap-2 text-xl font-bold transform hover:scale-105 transition ease-in-out duration-300">Sign Up <IoIosArrowForward /></button>
            </div>
          </div>
          <div>
            <Image src={Img3} alt="" />
          </div>
        </div>

       {/* Find and booking hostels cards */}
        <div className="p-4 lg:mx-11 lg:mt-7 text-[#1A355E]">
          <div className="">
            <p className="font-bold text-[#cda330]">Discover</p>
            <h1 className="text-4xl font-bold mb-6 mt-4 w-[320px] lg:w-full text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Find and Book Your Perfect Hostel
            </h1>
            <p className="w-[320px] lg:w-full">
              Searching, comparing and booking hostels has never been easier.
              With our platform you can quickly find and reserve the perfect
              hostel for your needs.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row justify-center">
            <div>
              <Image src={Img3} alt="" className="h-[250px] w-[600px]"/>
              <div className="mt-6">
                <p className="text-2xl font-bold text-[#1A355E]">Search Your Ideal Hostel</p>
                <p className="mt-6">
                  Use our intuitive search function to browse through a wide
                  selection of hostels near your university.
                </p>
              </div>
            </div>
            <div className="">
              <Image src={Img} alt="" className="h-[250px] w-[700px]"/>
              <div className="mt-6">
                <p className="text-2xl font-bold text-[#1A355E]">
                  Compare prices and amenities
                </p>
                <p className="mt-6">
                  Easily compare prices, amenities and reviews to make an
                  informed decision.
                </p>
              </div>
            </div>
            <div className="">
              <Image src={Img2} alt="" className="h-[250px] w-[600px]"/>
              <div className="mt-6">
                <p className="text-2xl font-bold text-[#1A355E]">
                  Book a Reserve with Confidence
                </p>
                <p className="mt-6">
                  Once you&apos;ve found the perfect hostel, book and reserve it
                  hassle-free through our secure plartform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-10 gap-4 lg:mt-16">
            <button className="border-2 border-black p-2 hover:bg-gradient-to-l from-[#4A90E2] to-[#1A355E] hover:text-[#FAF9F6] transition ease-in-out duration-300">
              Learn More
            </button>
            <button className="flex items-center gap-3 transform hover:scale-105 transition ease-in-out duration-300">
              Sign Up <SlArrowRight />
            </button>
          </div>
        </div>


        <div className="xl:flex items-center md:px-[4.5rem] py-40 px-5 text-[#1A355E]">
          <div>
            <div className="block flex-wrap md:block xl:flex gap-10">
              <div className="flex-[1]">
                <small className="text-lg font-bold text-[#cda330]">Convenient</small>
                <h1 className="text-5xl font-medium capitalize py-5 leading-snug text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
                  Discover More about our hostel services
                </h1>
              </div>

              <div className="flex-[1] lg:my-auto">
                <p className="text-xl leading-relaxed">
                  In addition to providing comfortable accommodation we offer a
                  range of support services,valuable hostel management
                  resources, and exciting community events. Our goal is to
                  create a vibrant and inclusive iving environment for all
                  students
                </p>
              </div>
            </div>

            <div className="block flex-wrap md:block xl:flex gap-10 py-10">
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#1A355E]">
                  Support Services
                </h1>
                <p>
                  Our dedicated team is available 24/7 to assist you with any
                  queries or concerns you may here.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#1A355E]">
                  Hostel Management Resources
                </h1>
                <p>
                  We provide hostel managers with advance tools and software o
                  streamline their operations and enhance eficiency.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#1A355E]">
                  Community Events
                </h1>
                <p>
                  JOin our vibrant community and participate n a variety of
                  engaging events nd activies.
                </p>
              </div>
            </div>

            <div className="flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5">
              <button className="border-[1px] border-black py-2 px-8 text-xl hover:bg-gradient-to-l from-[#4A90E2] to-[#1A355E] hover:text-[#FAF9F6] transition ease-in-out duration-300">
                Learn More
              </button>
              <button className="text-xl font-bold transform hover:scale-105 transition ease-in-out duration-300 text-[#cda330] hover:shadow-sm">Sign Up</button>
            </div>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row gap-10 px-3 lg:px-20 items-center text-[#1A355E]">
          <div className="flex-[1]">
            <h1 className="text-4xl font-semibold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Discover the Best Hostels near Your University
            </h1>
            <p className="py-5 text-lg">
              Find the perfect place to stay with our extensive selection of
              hostels. Book now and enjoy a comfortable and convenient
              experience
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <h1 className="text-5xl font-bold py-5 text-[#1A355E]">50%</h1>
                <p>
                  Hostels available 1000+ | Students Served: 5000+ | Bookings
                  Made: 10000+
                </p>
              </div>
              <div>
                <h1 className="text-5xl font-bold py-5 text-[#1A355E]">50%</h1>
                <p>
                  Satisfied Students: 95% | Successful Bookings: 98% | Happy
                  Hostel Managers
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 flex-[1]">
            <Image src={Img} alt="" className="lg:h-[400px]" />
          </div>
        </section>


        {/* // Customer Testimonial Carousel */}

        <section className="lg:mt-8">
        <div
  id="carouselExampleCaptions"
  className="relative"
  data-twe-carousel-init
  data-twe-ride="carousel">
  {/* <!--Carousel indicators--> */}
  <div
    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="0"
      data-twe-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

  {/* <!--Carousel items--> */}
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/* <!--First item--> */}
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-active
      data-twe-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <Image
        src={Himage}
        className="block w-full"
        alt="..."
        
        />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-[#FAF9F6] md:block">
        <h5 className="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <Image
        src={Img}
        className="block w-full"
        alt="..."
         />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-[#FAF9F6] md:block">
        <h5 className="text-xl">Second slide label</h5>
        <p>
          Some representative placeholder content for the second slide.
        </p>
      </div>
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <Image
        src={Img2}
        className="block w-full"
        alt="..."
        />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-[#FAF9F6] md:block">
        <h5 className="text-xl">Third slide label</h5>
        <p>
          Some representative placeholder content for the third slide.
        </p>
      </div>
    </div>
  </div>

  {/* <!--Carousel controls - prev item--> */}
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-[#FAF9F6] opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  {/* <!--Carousel controls - next item--> */}
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-[#FAF9F6] opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
        </section>

        {/* // Carousel End */}

        <section className="flex items-center justify-center w-full px-5 h-[60vh] text-[#1A355E]">
          <div>
            <h1 className="text-center text-4xl font-semibold py-5 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Find Your Perfect Hostel
            </h1>
            <p className="text-center ">
              Discover affordable and convenient hostels near your university.
            </p>

            <div className="flex gap-10 py-5 items-center justify-center w-full">
              <button className="bg-gradient-to-l from-[#4A90E2] to-[#1A355E] text-[#FAF9F6] py-2 px-5 border-2 hover: rounded-[2px] transform hover:scale-105 transition ease-in-out duration-300">
                Search
              </button>
              <button className="border-[0.5px] border-black py-2 px-5 transform hover:scale-105 transition ease-in-out duration-300 hover:shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </section>

        <section className="border-[1px] border-black mx-3 my-5 lg:mx-20 pt-5 lg:pt-0 flex flex-col lg:flex-row items-center gap-10 text-[#1A355E]">
          <div className="px-5 ">
            <h1 className="text-4xl font-semibold py-5 text-transparent bg-clip-text bg-gradient-to-l from-[#4A90E2] to-[#1A355E]">
              Get the Latest Updates Here
            </h1>
            <p className="text-lg">
              Subscribe to our newsletter for the latest updates, tips, and
              promotions.
            </p>

            <form action="" className="py-5 ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-black border-[1px] w-[90%] h-12 px-5"
              />
              <button className="bg-gradient-to-l from-[#4A90E2] to-[#1A355E] hover:shadow-xl text-[#FAF9F6] hover:text-[#FAF9F6] text- w-[90%] my-5 h-12">
                Sign Up
              </button>
            </form>
            <p className="py-5 text-sm">
              By clicking Sign Up, you confirm that you agree with our Terms and
              Conditions.
            </p>
          </div>
          <div>
            <Image src={Img} alt="" />
          </div>
        </section>

        <section className="px-3 py-20 flex flex-col lg:flex-row lg:gap-20 gap-10 lg:px-20 justify-between w-full text-[#1A355E]">
          <div>
            <small className="font-semibold text-lg py-5">Connect</small>
            <h1 className="text-3xl font-bold py-5 text-[#1A355E]">Get In Touch</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="lg:pr-60">
            <div className="flex gap-10 items-start text-black">
              <SiGmail size={30} />
              <div className="flex flex-col gap-2 text-[#1A355E]">
                <p className="font-bold text-xl">Email</p>
                <p className="underline">contact@hostelhub.com</p>
              </div>
            </div>
            <div className="flex gap-10 items-start py-5 text-black">
              <FaPhone size={30} />
              <div className="flex flex-col gap-2 text-[#1A355E]">
                <p className="font-bold text-xl">Phone</p>
                <p className="underline">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-10 items-start text-black">
              <FaLocationPin size={30} />
              <div className="flex flex-col gap-2 text-[#1A355E]">
                <p className="font-bold text-xl">Office</p>
                <p className="underline">123 main St, Anytown, USA</p>
              </div>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section className="lg:px-20">
        <QuestionPage  />
        <div className="pb-20 text-center text-[#1A355E]">
          <h1 className="text-4xl font-semibold py-5">Still have questions?</h1>
          <p className="text-lg pb-5">Contact us for more information.</p>
          <button className="border-[1px] bg-gradient-to-l from-[#4A90E2] to-[#1A355E] text-[#FAF9F6] px-3 py-2 transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-300">Contact</button>
        </div>
        </section>
      </div>
      

      

    </section>
  );
}
