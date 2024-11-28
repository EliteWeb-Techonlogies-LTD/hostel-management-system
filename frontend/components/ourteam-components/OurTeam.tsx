

import Image from "next/image"
import Img from "../../public/images/agoo-hostel.jpg"
import Img2 from "../../public/images/ano.webp"
import Img3 from "../../public/images/img.webp"
import Profile1 from "../../public/images/b5f6905ca104bb7504095636fa73bd10.jpeg";
import Profile2 from "../../public/images/avatar.png";
import Profile3 from "../../public/images/profile-1.jpg";
import Profile4 from "../../public/images/profile-2.jpg";
import Profile5 from "../../public/images/profile-3.jpg";
import Profile6 from "../../public/images/profile-4.jpg";
import Locations from "../about-components/Locations";
import Faq from "../home-components/Faq";

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
          <Faq/>
        </div>
      </section>

        {/* Talented team */}
        <div className="flex items-center justify-center w-full px-2 lg:px-10 py-20 text-center">
          <div>
            <small className="text-xl font-bold">Experienced</small>
            <h1 className="text-5xl font-semibold py-4">Our Team</h1>
            <p className="text-lg lg:text-xl">
              Meet Our talented hostel management team.
            </p>

            <div className="flex flex-col gap-10 py-10">
              <div className="flex flex-col lg:flex-row gap-10 py-10">
                <div>
                  <Image
                    src={Profile1}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">John Doe</h1>
                  <p className="text-2xl pb-3">Manager</p>
                  <p className="text-lg">
                    John is responsible for overseeing all hostel operations and
                    ensuring a comfortable stay for students.
                  </p>
                </div>
                <div>
                  <Image
                    src={Profile2}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">Jane Smith</h1>
                  <p className="text-2xl pb-3">Assistant Manager</p>
                  <p className="text-lg">
                   Jane supports the manager day-to-day tasks and assists with students inquiies and concerns.
                  </p>
                </div>
                <div>
                  <Image
                    src={Profile3}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">Michael John</h1>
                  <p className="text-2xl pb-3">Maintenance Supervisor</p>
                  <p className="text-lg">
                   Michael ensures that all hostel facilities are well-maintained and addresses any repair or maintenance issues.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 pb-28">
              <div>
                  <Image
                    src={Profile4}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">Sarah Davis</h1>
                  <p className="text-2xl pb-3">Front Desk Coordinator</p>
                  <p className="text-lg">
                    Sarah manages the front desk and assists students with check-in, check-out and general inquiries.
                  </p>
                </div>
                <div>
                  <Image
                    src={Profile5}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">We are hiring!</h1>
                  <p className="text-2xl pb-3">Manager</p>
                  <p className="text-lg">
                    Join our team and be part of our hostel community
                  </p>
                </div>
                <div>
                  <Image
                    src={Profile6}
                    alt=""
                    className="rounded-full w-[100px] mx-auto object-cover"
                  />
                  <h1 className="text-2xl font-bold py-5">Full name</h1>
                  <p className="text-2xl pb-3">Job Title</p>
                  <p className="text-lg">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold">We are hiring!</h1>
            <p className="py-5 text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="border-[1px] border-black px-5 py-3 text-xl">Open positions</button>
          </div>
        </div>
    </section>
  )
}