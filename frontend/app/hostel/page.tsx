

import  Footer  from "@/components/home-components/Footer";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { LuPhone } from "react-icons/lu";
// import { SlLocationPin } from "react-icons/sl";

import MeetOurTeam from "@/components/ourteam-components/MeetOurTeam";
import DiscoverHostel from "@/components/hostel-page-components/DiscoverHostel";
import ViewHostels from "@/public/ViewHostels";
import PriceCards from "@/components/about-components/PriceCards";
import Navbar from "@/components/home-components/Navbar";
import HostelHero from "@/components/hostel-page-components/HostelHero";
import FeaturedHostels from "@/components/hostel-page-components/FeaturedHostels";
import ContactUSHostel from "@/components/hostel-page-components/ContactUs";




export default function ContactUs() {
  return (
    <main>
       <Navbar/>
       <HostelHero/>
       <ViewHostels/>
       <DiscoverHostel/>
        <section className="mt-12 mb-8 text-center lg:my-14 w-full">
          <span className="font-semibold">Affordable</span>
          <h2 className="font-bold text-3xl">Pricing Options</h2>
          <p className="font-medium mb-5">
            Choose from a range of price plans to suit your budget
          </p>
          <button className="bg-black text-white py-2 px-4 mb-5 border border-solid border-black">
            Monthly
          </button>
          <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-5">
            Yearly
          </button>
        </section>
        <PriceCards/>
        <FeaturedHostels/>
        <ContactUSHostel/>
        <section className="bg-gray-700 py-12 pl-4 mr-4 lg:my-24 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Find Your Perfect Hostel
          </h2>
          <p className="font-medium text-white mb-4">
            Browse through a wide selection of hostels near the university
            campus
          </p>
          <div>
          <button className="bg-black text-white py-2 px-4 mr-4 hover:bg-inherit hover:text-white hover:border-white hover:border cursor-pointer">Book</button>
          <button className="bg-none text-white py-2 px-5 border border-solid border-white hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
            Learn More
          </button>
          </div>
        </section>
        <MeetOurTeam />
        <Footer />
        {/* 5 stars */}
        {/* <section className="flex flex-col gap-4 items-center justify-center text-center my-16 lg:my-24 lg:w-3/5 lg:mx-auto lg:items-center lg:justify-center">
          <div className="flex my-7">
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
            </div>
          <p className="font-bold text-xl">
            Staying in one of the hostels listed on this website was a great
            experience. The facilities were clean and comfortable, and the staff
            was friendly and helpful.
          </p>
          <Image src={Himage} alt="" className="rounded-full w-[50px] h-[50px]" />
          <p>
            <span className="block font-bold">John Doe</span>Student, ABC
            University
          </p>
          <div className="flex gap-1">
              <FaWebflow className="text-3xl" />
              <span className="text-xl font-bold">Webflow</span>
            </div>
        </section> */}

        {/* <section className="my-8 lg:my-10 lg:mx-8">
          <div className="flex flex-col gap-4 mb-4 text-center lg:flex lg:flex-row lg:gap-10">
            <div className="lg:w-2/5">
              <MdOutlineMailOutline />
              <h3 className="font-extrabold my-4">Email</h3>
              <p className="mb-3">
                If you have any question or need assistance with booking a
                hostel, Please feel free to reach out to us{" "}
              </p>
              <a href="http://" target="_blank">
                <u>hello@relume.io</u>
              </a>
            </div>

            <div className="lg:w-2/5">
              <LuPhone />
              <h3 className="font-extrabold my-4">Phone</h3>
              <p className="mb-3">
                You contact us via phone during our business hours.
              </p>
              <u>+1 (555) 123-4567</u>
            </div>

            <div className="lg:w-2/5">
              <SlLocationPin />
              <h3 className="font-extrabold my-4">Office</h3>
              <p className="mb-4">
                Visit our office for any in-person inquiries or assistance
              </p>
              <u> 123 Main St, Anytown, USA </u>
            </div>
          </div>
        </section> */}
      </main>
  );
}
