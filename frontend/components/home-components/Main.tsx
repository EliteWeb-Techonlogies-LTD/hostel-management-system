import { FaCube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";

import Image from "next/image";
import Img from "../../public/images/ano.webp";
import Img2 from "../../public/images/img.webp";
import Img3 from "../../public/images/agoo-hostel.jpg";
import HeroImg from "../../public/images/ano.webp";

export default function Main() {
  return (
    <section className="">
      <div>
        {/* Fisrt Hero section for the main page */}
        <div className="h-[85vh] pt-36">
          <h1 className="text-5xl lg:text-7xl lg:w-[850px] text-center md:w-[600px] md:mx-auto font-semibold py-6 leading-snug">
            Find the perfect hostel for your stay
          </h1>
          <p className="text-lg text-center text-wrap py-2">
            Welcome to our hostel booking website. Discover a wide range of
            affordable and convinient hostels near your university.
          </p>

          <div className="flex gap-5 justify-center w-full py-10">
            <button className="bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]">
              Explore
            </button>
            <button className="border-[0.5px] border-black py-2 px-5">
              Learn More
            </button>
          </div>
        </div>

        {/* The hero image */}
        <section className="w-full lg:px-10 py-10 px-3">
          <Image
            src={HeroImg}
            width={1200}
            alt="heroImage"
            className="mx-auto"
          />
        </section>

        {/* the section about the simplified way of looking for hostels */}
        <div className="xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10">
          <div>
            <small className="font-semibold text-lg">Simplified</small>
            <h1 className="md:text-5xl text-4xl font-bold py-3 md:w-[600px] leading-[67px] w-[340px]">
              Find and Book your Ideal Hostel
            </h1>
            <p className="text-xl leading-loose w-[350px] md:w-[600px]">
              Booking a hostel has never being easier. Follow our step-by-step
              guide to secure your accommodation hasle-free.
            </p>
            <div className="lg:flex gap-10 items-center py-5">
              <div>
                <FaCube className="text-3xl mb-5" />
                <h1 className="text-xl font-bold pb-5">Easy Booking</h1>
                <p>
                  Browse through a wide selection of hostels near your
                  university.
                </p>
              </div>
              <div>
                <FaCube className="text-3xl mb-5" />
                <h1 className="text-xl font-bold pb-5">Convenient Options</h1>
                <p>
                  Choose from different amenities and room types to suit your
                  preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-10 pb-10">
              <button className="bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]">
                Explore
              </button>
              <button className="border-[0.5px] border-black py-2 px-5">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <Image src={Img} alt="" height={1500} />
          </div>
        </div>

        {/* The section talking about secured our bookings are  */}
        <div className="xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10">
          <div>
            <div>
              <h1 className="text-3xl font-semibold py-3">Secure Bookings</h1>
              <p className="text-[16px]">
                Easily book and reserve hostels with out secure online platform.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold py-3">Wide Selection</h1>
              <p className="text-[16px]">
                Choose from a wide variety of hostels to the find the perfect
                accommodation for your needs.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold py-3">Management Tools</h1>
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

        {/* The convienience of the hostel website */}
        <div className="xl:flex items-center gap-16 md:px-[4rem] py-2 px-5">
          <div className="w-[50%] leading-loose">
            <small className="font-bold text-lg">Convenience</small>
            <h1 className="md:text-5xl text-4xl font-bold pt-5 pb-8 md:w-[600px] leading-[67px] w-[340px]">
              Find the Perfect Hostel for You
            </h1>
            <p className="pb-7 text-xl leading-loose w-[350px] md:w-[600px]">
              Our hostel website offers students the Convenience of easily
              finding and booking the perfect accommodation near their
              university. With a wide variety of hostels to choose from,
              students can find a lace that suits heir needs and preferences.
              Plus, our services s affordable, ensuring that students can find a
              hostel that fit their budget.
            </p>

            <div className="flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5">
              <button className="border-[1px] border-black py-2 px-8 text-xl">
                Learn More
              </button>
              <button className="text-xl font-bold">Sign Up</button>
            </div>
          </div>
          <div>
            <Image src={Img3} alt="" />
          </div>
        </div>

        <div className="p-4">
          <div className="">
            <p className="font-bold">Discover</p>
            <h1 className="text-4xl font-bold mb-6 mt-4 w-[320px]">
              Find and Book Your Perfect Hostel
            </h1>
            <p className="w-[320px]">
              Searching, comparing and booking hepstels has never been easier.
              With our platform you can quickly find and reserve the perfect
              hostel for your needs.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row justify-center">
            <div>
              <Image src={Img3} alt="" className="h-[250px] w-[600px]"/>
              <div className="mt-6">
                <p className="text-2xl font-bold">Search Your Ideal Hostel</p>
                <p className="mt-6">
                  Use our intuitive search function to browse through a wide
                  selection of hostels near your university.
                </p>
              </div>
            </div>
            <div className="">
              <Image src={Img} alt="" className="h-[250px] w-[700px]"/>
              <div className="mt-6">
                <p className="text-2xl font-bold">
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
                <p className="text-2xl font-bold">
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
            <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
              Learn More
            </button>
            <button className="flex items-center gap-3 transition ease-in-out duration-300">
              Sign Up <SlArrowRight />
            </button>
          </div>
        </div>


        <div className="xl:flex items-center md:px-[4.5rem] py-40 px-5">
          <div>
            <div className="block flex-wrap md:block xl:flex gap-10">
              <div className="flex-[1]">
                <small className="text-lg font-bold">Convenient</small>
                <h1 className="text-5xl font-medium capitalize py-5 leading-snug">
                  Discover More about our hostel services
                </h1>
              </div>

              <div className="flex-[1]">
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
                <FaCube className="text-3xl mb-5" />
                <h1 className="text-3xl font-semibold py-4">
                  Support Services
                </h1>
                <p>
                  Our dedicated team is available 24/7 to assist you with any
                  queries or concerns you may here.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5" />
                <h1 className="text-3xl font-semibold py-4">
                  Hostel Management Resources
                </h1>
                <p>
                  We provide hostel managers with advance tools and software o
                  streamline their operations and enhance eficiency.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5" />
                <h1 className="text-3xl font-semibold py-4">
                  Community Events
                </h1>
                <p>
                  JOin our vibrant community and participate n a variety of
                  engaging events nd activies.
                </p>
              </div>
            </div>

            <div className="flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5">
              <button className="border-[1px] border-black py-2 px-8 text-xl">
                Learn More
              </button>
              <button className="text-xl font-bold">Sign Up</button>
            </div>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row gap-10 px-3 lg:px-20 items-center">
          <div className="flex-[1]">
            <h1 className="text-4xl font-semibold lg:text-5xl">
              Discover the Best Hostels near Your University
            </h1>
            <p className="py-5 text-lg">
              Find the perfect place to stay with our extensive selection of
              hostels. Book now and enjoy a comfortable and convinient
              experience
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <h1 className="text-5xl font-bold py-5">50%</h1>
                <p>
                  Hostels available 1000+ | Students Served: 5000+ | Bookings
                  Made: 10000+
                </p>
              </div>
              <div>
                <h1 className="text-5xl font-bold py-5">50%</h1>
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

        <section className="flex items-center justify-center w-full px-5 h-[60vh]">
          <div>
            <h1 className="text-center text-4xl font-semibold py-5 lg:text-5xl">
              Find Your Perfect Hostel
            </h1>
            <p className="text-center ">
              Discover affordable and convinient hostels near your university.
            </p>

            <div className="flex gap-10 py-5 items-center justify-center w-full">
              <button className="bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]">
                Search
              </button>
              <button className="border-[0.5px] border-black py-2 px-5">
                Sign Up
              </button>
            </div>
          </div>
        </section>

        <section className="border-[1px] border-black mx-3 my-5 lg:mx-20 pt-5 lg:pt-0 flex flex-col lg:flex-row items-center gap-10">
          <div className="px-5 ">
            <h1 className="text-4xl font-semibold py-5">
              Get the Latest Updates Here
            </h1>
            <p className="text-lg">
              Subcribe to our newsletter for the latest updates, tips, and
              promtions.
            </p>

            <form action="" className="py-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-black border-[1px] w-[90%] h-12 px-5"
              />
              <button className="bg-black text-white900 w-[90%] my-5 h-12">
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

        <section className="px-3 py-20 flex flex-col lg:flex-row lg:gap-20 gap-10 lg:px-20 justify-between w-full">
          <div>
            <small className="font-semibold text-lg py-5">Connect</small>
            <h1 className="text-3xl font-bold py-5">Get In Touch</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="lg:pr-60">
            <div className="flex gap-10 items-start">
              <SiGmail size={30} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Email</p>
                <p className="underline">contact@hostelhub.com</p>
              </div>
            </div>
            <div className="flex gap-10 items-start py-5">
              <FaPhone size={30} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Phone</p>
                <p className="underline">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-10 items-start">
              <FaLocationPin size={30} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Office</p>
                <p className="underline">123 main St, Anytown, USA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
