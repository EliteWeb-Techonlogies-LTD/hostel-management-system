import { FaCube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image";
import Img from "../../public/images/ano.webp";
import Img3 from "../../public/images/agoo-hostel.jpg";
import QuestionPage from "./FaqHomePage";
import { IoIosArrowForward } from "react-icons/io";

import '../../public/css/style.css'



export default function Main() {
  
  return (
    <section className="">
     

      <div>
        {/* The convenience of the hostel website */}
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
              <button className="border-[1px] border-black py-2 px-3 font-bold text-xl bg-white text-[#1A355E] transform hover:scale-105 transition ease-in-out duration-300">
                Learn More
              </button>
              <button className="flex items-center justify-center gap-2 text-xl font-bold transform hover:scale-105 transition ease-in-out duration-300">Sign Up <IoIosArrowForward /></button>
            </div>
          </div>
          <div>
            <Image src={Img3} alt="" />
          </div>
        </div>
        
        <div className="xl:flex items-center md:px-[4.5rem] py-40 px-5 text-[#000]">
          <div>
            <div className="block flex-wrap md:block xl:flex gap-10 items-center">
              <div className="flex-[1]">
                <small className="text-lg font-bold">Convenient</small>
                <h1 className="text-5xl font-medium capitalize py-5 leading-snug ">
                  Discover More about our hostel services
                </h1>
              </div>

              <div className="flex-[1]">
                <p className="text-xl leading-relaxed">
                  In addition to providing comfortable accommodation we offer a
                  range of support services,valuable hostel management
                  resources, and exciting community events. Our goal is to
                  create a vibrant and inclusive living environment for all
                  students
                </p>
              </div>
            </div>

            <div className="block flex-wrap md:block xl:flex gap-10 py-10">
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#000]">
                  Support Services
                </h1>
                <p>
                  Our dedicated team is available 24/7 to assist you with any
                  queries or concerns you may here.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#000]">
                  Hostel Management Resources
                </h1>
                <p>
                  We provide hostel managers with advance tools and software o
                  streamline their operations and enhance efficiency.
                </p>
              </div>
              <div className="flex-[1]">
                <FaCube className="text-3xl mb-5 text-black" />
                <h1 className="text-3xl font-semibold py-4 text-[#000]">
                  Community Events
                </h1>
                <p>
                  JOin our vibrant community and participate n a variety of
                  engaging events nd activities.
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

        <section className="flex flex-col lg:flex-row gap-10 px-3 lg:px-20 items-center text-[#000]">
          <div className="flex-[1]">
            <h1 className="text-4xl font-semibold lg:text-5xl">
              Discover the Best Hostels near Your University
            </h1>
            <p className="py-5 text-lg">
              Find the perfect place to stay with our extensive selection of
              hostels. Book now and enjoy a comfortable and convenient
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


        <section className="flex items-center justify-center w-full px-5 h-[60vh] text-[#000]">
          <div>
            <h1 className="text-center text-4xl font-semibold py-5 lg:text-5xl">
              Find Your Perfect Hostel
            </h1>
            <p className="text-center ">
              Discover affordable and convenient hostels near your university.
            </p>

            <div className="flex gap-10 py-5 items-center justify-center w-full">
              <button className="py-2 px-5 border-2 hover: rounded-[2px]">
                Search
              </button>
              <button className="border-[0.5px] border-black py-2 px-5 transform hover:scale-105 transition ease-in-out duration-300 hover:shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </section>

        <section className="border-[1px] border-black mx-3 my-5 lg:mx-20 pt-5 lg:pt-0 flex flex-col lg:flex-row items-center gap-10 text-[#00]">
          <div className="px-5 ">
            <h1 className="text-4xl font-semibold py-5">
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
              <button className=" text-[#000] text- w-[90%] my-5 h-12 border-[1px] border-black">
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

        <section className="px-3 py-20 flex flex-col lg:flex-row lg:gap-20 gap-10 lg:px-20 justify-between w-full text-[#000]">
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
              <div className="flex flex-col gap-2 text-[#000]">
                <p className="font-bold text-xl">Email</p>
                <p className="underline">contact@hostelhub.com</p>
              </div>
            </div>
            <div className="flex gap-10 items-start py-5 text-black">
              <FaPhone size={30} />
              <div className="flex flex-col gap-2 text-[#000]">
                <p className="font-bold text-xl">Phone</p>
                <p className="underline">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-10 items-start text-black">
              <FaLocationPin size={30} />
              <div className="flex flex-col gap-2 text-[#000]">
                <p className="font-bold text-xl">Office</p>
                <p className="underline">123 main St, Anytown, USA</p>
              </div>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section className="lg:px-20">
        <QuestionPage  />
        <div className="pb-20 text-center text-[#000]">
          <h1 className="text-4xl font-semibold py-5">Still have questions?</h1>
          <p className="text-lg pb-5">Contact us for more information.</p>
          <button className="border-[1px] text-[#000] px-3 py-2 transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-300">Contact</button>
        </div>
        </section>
      </div>
      

      

    </section>
  );
}
