

import Image from "next/image"
import Img from "../../public/images/agoo-hostel.jpg"
import Img2 from "../../public/images/ano.webp"
import Img3 from "../../public/images/img.webp"
import Locations from "../about-components/Locations";
import MeetOurTeam from "./MeetOurTeam";

export default function OurTeam (){
  return(
    <section>
      {/* Hero section image */}
      <div className="py-2">
          <Image src={Img2} alt="" className="w-full"/>
      </div>
       {/* Modern hostel experience */}
      <div className="flex items-center justify-center w-full h-[70vh] px-2 lg:px-0">
          <div>
            <h1 className="text-3xl lg:text-6xl font-semibold">
              Modern Hostel Experience
            </h1>
            <p className="text-lg py-3">
              Discover a comfortable and affordable stay at our modern hostel
              near the university
            </p>
            <div className="flex flex-col gap-5 lg:flex-row items-center justify-center">
              <span className="bg-gray-300 px-3 py-2 text-lg font-bold">
                Convenient
              </span>
              <span className="bg-gray-300 px-3 py-2 text-lg font-bold">
                Affordable
              </span>
              <span className="bg-gray-300 px-3 py-2 text-lg font-bold">
                Students-friendly
              </span>
            </div>
          </div>
        </div>

        {/* Locations  */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <small className="py-5 text-xl font-bold">Convenient</small>
            <h1 className="text-5xl font-bold lg:text-7xl pb-5">Locations</h1>
            <p className="text-xl lg:text-2xl">
              Discover our hostels prime location and nearby attractions.
            </p>
            <Locations/>
          </div>
        </div>

        {/* Image gallery of hostels */}
        <div className="text-center flex items-center justify-center w-full px-2 lg:px-10 py-32">
          <div>
            <h1 className="text-4xl font-bold lg:text-5xl">Image Gallery</h1>
            <p className="py-3 lg:text-xl">
              Explore Our Beautiful Hostel Through Stinning Images
            </p>

            <div className="flex flex-col gap-5 lg:flex-row py-10">
              <div className="flex flex-col gap-5 flex-[1]">
                <div>
                  <Image src={Img} alt="" />
                </div>
                <div>
                  <Image src={Img2} alt="" />
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-[1]">
                <div>
                  <Image src={Img2} alt="" className="h-[190px]" />
                </div>
                <div>
                  <Image src={Img3} alt="" className="h-[190px]" />
                </div>
                <div>
                  <Image src={Img} alt="" className="h-[300px]" />
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-[1]">
                <div>
                  <Image src={Img} alt="" />
                </div>
                <div>
                  <Image src={Img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-between px-4 lg:flex-row lg:px-28 pt-20 gap-10">
        <div className="flex-[1]">
          <h2 className="text-4xl py-2 font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="py-3">
            Find answers to common questions about booking a hostel.
          </p>
          <button className="border-[1px] border-black px-5 py-2">
            Contact
          </button>
        </div>
        <div className="flex-[1.7]">
        </div>
      </section>

        {/* Talented team */}
        <MeetOurTeam/>
    </section>
  )
}