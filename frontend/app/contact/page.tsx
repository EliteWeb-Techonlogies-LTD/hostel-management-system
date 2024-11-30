import { FaPlus } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { TiSocialYoutube } from "react-icons/ti";
// import { FaFacebook } from "react-icons/fa";
// import { SlSocialInstagram } from "react-icons/sl";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { LuPhone } from "react-icons/lu";
// import { SlLocationPin } from "react-icons/sl";
import { FaWebflow } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import  Navbar  from "@/components/home-components/Navbar";
import  Footer  from "@/components/home-components/Footer";
import Image from "next/image"
import Himage from "@/public/images/h-image.jpg"


export default function ContactUs() {
  const arrow = ">";

  return (
    <>
      {/* className="ml-3" */}
      

      {/* Navbar */}

      <Navbar />

      <main className="mx-4">
        {/* Welcome to Our Hostel */}

        <section className="mb-6 mt-5">
          <div className="text-left lg:flex lg:gap-7">
            <h2 className="font-bold text-3xl py-4">
              Find Your Perfect Hostel Near the University
            </h2>

            <div>
              <p className="font-medium pb-4 my-4">
                Welcome to our hostel website! Discover and book the ideal
                accommodation for your university life.
              </p>

              <button className="bg-black text-white py-2 px-4 mr-4 mb-5 hover:bg-white hover:text-black hover:border-black hover:border cursor-pointer">
                Search
              </button>
              <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <Image src={Himage} alt="" className="lg:max-h-[500px] lg:mx-auto" />
        </section>

        {/* Find your Ideal Hostel */}

        <section className="text-center p-5 pt-12 mb-6 lg:mb-10">
          <span className="font-semibold">Hostels</span>
          <h2 className="font-bold text-3xl my-3">Find Your Ideal Hostel</h2>
          <p className="font-medium">Discover the Best Hostels for Students</p>
        </section>

        {/* Hostels     */}

        <section className="mb-4">
          <div className="mb-5 lg:flex lg:gap-20">
            <div className="my-4">
              <Image src={Himage} alt="" />
              <h3 className="mt-4 font-bold mb-2 text-lg">Hostel Name Here</h3>
              <p className="font-medium mb-4">
                Discover a Variety of Hostels for Every Budget and Preference
              </p>

              <div className="flex gap-2 mb-5">
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Affordable
                </button>
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Convenient
                </button>
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Safe
                </button>
              </div>

              <span className="p-3 mb-4 font-semibold hover:bg-black hover:text-white hover:border-black hover:border hover:cursor-pointer">
                View Hostel &nbsp;&nbsp; {arrow}
              </span>
            </div>

            <div>
              <Image src={Himage} alt="" />
              <h3 className="mt-4 font-bold mb-2 text-lg">Hostel Name Here</h3>
              <p className="font-medium mb-4">
                Explore the Hostel&apos;s Amenities and Features
              </p>

              <div className="flex gap-2 mb-5">
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Affordable
                </button>
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Convenient
                </button>
                <button className="bg-gray-200 font-semibold px-3 py-2">
                  Safe
                </button>
              </div>

              <span className="p-3 mb-4 font-semibold hover:bg-black hover:text-white hover:border-black hover:border hover:cursor-pointer cursor-pointer">
                View Hostel &nbsp;&nbsp; {arrow}
              </span>
            </div>
          </div>

          <div className="text-center">
            <button className=" bg-white text-black py-2 px-5 border border-solid border-black mb-7 mt-4 lg:mt-8 hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
              View All
            </button>
          </div>
        </section>

        {/* Hostel Of The Week */}

        <section className="lg:flex lg:gap-16 lg:w-full lg:my-24">
          <div className="lg:w-3/5">
          <Image src={Himage} alt="" />
          </div>

          <div className="mt-3 lg:my-auto lg:w-2/5">
            <span className="font-semibold mb-3">Discover</span>
            <h2 className="font-bold text-3xl mb-5 mt-3">
              Hostel of the Week: Unforgettable Stays
            </h2>
            <p>
              Experience the best hostel stays with our &ldquo;Hostel of the
              Week&rdquo; feature. Each week, we showcase a unique and
              exceptional hostel that offers Unforgettable experience for
              students. From stunning locations to top-notch amenities, these
              hostels are hand-picked to to ensure an amazing stay for you.
            </p>

            <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 mr-5 mt-6 font-semibold hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
              Learn More
            </button>
            <span className="p-3 mb-7 mt-6 font-semibold hover:bg-black hover:text-white hover:border-black hover:border hover:cursor-pointer cursor-pointer">
              Book Now &nbsp;&nbsp; {arrow}
            </span>
          </div>
        </section>

        {/* *********Payment Options will come here */}

        <section className="mt-12 mb-8 text-center lg:my-14">
          <span className="font-semibold">Affordable</span>
          <h2 className="font-bold text-3xl mb-5 mt-4">Pricing Options</h2>
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

        <section className="flex flex-col gap-5 mb-24 lg:flex lg:gap-8 lg:flex-row">
          {/* Basic Plan */}

          <div className="border border-solid border-black py-7 px-4 lg:w-2/5">
            {/* Cube image */}
            <span className="font-semibold">Basic Plan</span>
            <h2 className="font-bold text-3xl mb-5 mt-1">
              $19<span className="font-semibold text-base">/mo</span>
            </h2>
            <hr className="border-black opacity-50 border" />

            <div className="my-6">
              <p className="my-3">Includes:</p>
              <p className="my-4">
                ✔️ <span className="">24/7 Customer Support</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Free Wi-Fi</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Laundry Facilities</span>
              </p>
            </div>

            <button className="bg-black text-white text-center w-full py-3 mt-3 hover:bg-white hover:text-black hover:border-black hover:border cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Business plan */}

          <div className="border border-solid border-black py-7 px-4 lg:w-2/5">
            {/* Cube image */}
            <span className="font-semibold">Business Plan</span>
            <h2 className="font-bold text-3xl mb-5 mt-1">
              $29<span className="font-semibold text-base">/mo</span>
            </h2>
            <hr className="border-black opacity-50 border" />

            <div className="my-6">
              <p className="my-3">Includes:</p>
              <p className="my-4">
                ✔️ <span className="">All Basic Plan Features</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Gym Access</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Daily HouseKeeping</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Breakfast Included</span>
              </p>
            </div>

            <button className="bg-black text-white text-center w-full py-3 mt-3 hover:bg-white hover:text-black hover:border-black hover:border cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}

          <div className="border border-solid border-black py-7 px-4 lg:w-2/5">
            {/* Cube image */}
            <span className="font-semibold">Enterprise Plan</span>
            <h2 className="font-bold text-3xl mb-5 mt-1">
              $49<span className="font-semibold text-base">/mo</span>
            </h2>
            <hr className="border-black opacity-50 border" />

            <div className="my-6">
              <p className="my-3">Includes:</p>
              <p className="my-4">
                ✔️ <span className="">All Business Plan Features</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Conference Room Access</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Airport Shuttle Service</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Room Service</span>
              </p>
              <p className="mb-4">
                ✔️ <span className="">Premium Amenities</span>
              </p>
            </div>

            <button className="bg-black text-white text-center w-full py-3 mt-3 hover:bg-white hover:text-black hover:border-black hover:border cursor-pointer">
              Get Started
            </button>
          </div>
        </section>

        {/* Discover Additional Hostel Services */}

        <section className="mt-4 mb-8 lg:my-10">
          <span className="font-semibold">Features</span>
          <h2 className="font-bold text-3xl mb-5 mt-4">
            Discover Additional Hostel Services
          </h2>
          <p className="font-medium">
            Find out more about the services offered by our hostels.
          </p>
        </section>

        <section className="mb-6 lg:my-6">
          <div className="lg:flex lg:gap-8 mt-4">
            {/* Service 1 */}
            <div className=" mb-8">
              <div className="mb-4">
              <Image src={Himage} alt="" />
              </div>

              <div>
                <span className="font-semibold">Services</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">
                  10 Tips for a Comfortable Stay
                </h3>
                <p className="font-medium mb-5">
                  Learn how to make your hostel stay more enjoyable and
                  convenient.
                </p>
                <div className="flex gap-5">
                <Image src={Himage} alt="" className="rounded-full w-[50px] h-[50px]" />

                  <div className="flex flex-col gap-1">
                    <h3>John Doe</h3>
                    <p>11 Jan 2022 . 5 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}

            <div className="mb-8">
              <div className="mb-4">
              <Image src={Himage} alt="" />
              </div>

              <div>
                <span className="font-semibold">Tips</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">
                  The Benefit of Communal Spaces
                </h3>
                <p className="font-medium mb-5">
                  Discover how communal spaces in hostels can enhance your
                  experience.
                </p>
                <div className="flex gap-5">
                <Image src={Himage} alt="" className="rounded-full w-[50px] h-[50px]" />

                  <div className="flex flex-col gap-1">
                    <h3>Jane Smith</h3>
                    <p>11 Jan 2022 . 5 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="mb-8">
              <div className="mb-4">
              <Image src={Himage} alt="" />
              </div>

              <div>
                <span className="font-semibold">Spaces</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">
                  The Importance of Room Cleaning Services
                </h3>
                <p className="font-medium mb-5">
                  Learn why clean rooms are essential for a comfortable stay in
                  hostels.
                </p>
                <div className="flex gap-5">
                <Image src={Himage} alt="" className="rounded-full w-[50px] h-[50px]" />

                  <div className="flex flex-col gap-1">
                    <h3>David Johnson</h3>
                    <p>11 Jan 2022 . 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right lg:mt-4">
            <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
              View All
            </button>
          </div>
        </section>

        {/* Contact Us */}

        <section className="mb-7 lg:my-9">
          <span className="font-semibold">Discover</span>
          <h2 className="font-bold text-2xl mb-4 mt-3">Contact Us</h2>
          <p className="font-medium mb-5">
            Find the perfect hostel near your university campus.
          </p>
        </section>

        <section className="mb-6 lg:flex lg:flex-row lg:gap-24 lg:w-full lg:my-10">
          <div className="flex flex-col gap-4 mb-4 lg:w-2/5">
            <div>
              {/* <Image src={Himage} alt="" /> */}
              <h3 className="font-bold my-2">Email</h3>
              <p className="mb-3">Send us an email</p>
              <a
                href="http://"
                target="_blank"
                className="text-decoration-underline"
              >
                <u>hello@hostelwebsite.com</u>
              </a>
            </div>

            <div>
              {/* <Image src={Himage} alt="" /> */}
              <h3 className="font-bold my-2">Phone</h3>
              <p className="mb-3">Call us for assistance</p>
              <a
                href="http://"
                target="_blank"
                className="text-decoration-underline"
              >
                <u>+1 (555) 123-4567</u>
              </a>
            </div>

            <div>
              {/* <Image src={Himage} alt="" /> */}
              <h3 className="font-bold my-3">Office</h3>
              <p className="mb-4">123 Main St, Anytown, USA</p>
              <a
                href="http://"
                target="_blank"
                className="text-decoration-none p-3 hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer"
              >
                {" "}
                Get Directions &nbsp;&nbsp; {arrow}
              </a>
            </div>
          </div>

          <div className="mt-5 lg:w-3/5">
          <Image src={Himage} alt="" className="lg:mr-2 lg:max-h-96" />
          </div>
        </section>

        {/* Find Your Perfect Hostel  */}

        <section className="bg-gray-700 py-12 pl-4 mr-4 lg:my-24">
          <h2 className="text-white text-3xl font-bold mb-4">
            Find Your Perfect Hostel
          </h2>
          <p className="font-medium text-white mb-4">
            Browse through a wide selection of hostels near the university
            campus
          </p>
          <button className="bg-black text-white py-2 px-4 mr-4 hover:bg-inherit hover:text-white hover:border-white hover:border cursor-pointer">Book</button>
          <button className="bg-none text-white py-2 px-5 border border-solid border-white hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
            Learn More
          </button>
        </section>















        {/* FAQ */}
        <div className="p-4 mt-20 lg:flex lg:flex-row lg:gap-60 mb-8">
            <div className="flex flex-col gap-5 mb-10">
                <h1 className="text-4xl font-bold">FAQs</h1>
                <p className="font-medium">Find answers to common questions about our hostels, booking processes, and policies</p>
                <a className="border-2 border-black py-5 px-7 hover:bg-black hover:text-white cursor-pointer">Contact</a>
            </div>
            <div className="font-bold space-y-4 mb-10">
                <div>
                    <p className="border-2 border-black p-4 flex justify-between text-lg cursor-pointer">How to book a hostel?
                        <span className="text-2xl"><FaPlus /></span>
                    </p>
                </div>
                <div>
                    <p className="border-2 border-black p-4 flex justify-between text-lg cursor-pointer">What are the payment options?
                        <span className="text-2xl"><FaPlus /></span>
                    </p>
                </div>
                <div>
                    <p className="border-2 border-black p-4 flex justify-between text-lg cursor-pointer">What is the cancellation policy?
                        <span className="text-2xl"><FaPlus /></span>
                    </p>
                </div>
                <div>
                    <p className="border-2 border-black p-4 flex justify-between text-lg cursor-pointer">Are there any age restrictions?
                        <span className="text-2xl"><FaPlus /></span>
                    </p>
                </div>
                <div>
                    <p className="border-2 border-black p-4 flex justify-between text-lg cursor-pointer">Can I modify my booking?
                        <span className="text-2xl"><FaPlus /></span>
                    </p>
                </div>
            </div>
        </div>

        {/* 5 stars */}

        <section className="flex flex-col gap-4 items-center justify-center text-center my-16 lg:my-24 lg:w-3/5 lg:mx-auto lg:items-center lg:justify-center">
          {/* 5Stars goes Here */}
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
          {/* Webflow image goes here */}
          <div className="flex gap-1">
              {/* Webflow Icon */}
              <FaWebflow className="text-3xl" />
              <span className="text-xl font-bold">Webflow</span>
            </div>
        </section>

        {/* Meet our Team */}

        {/* COntact Us 2 */}

        <section className="my-8 lg:my-10 lg:mx-8">
          <div className="flex flex-col gap-4 mb-4 text-center lg:flex lg:flex-row lg:gap-10">
            <div className="lg:w-2/5">
              <Image src={Himage} alt="" />
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
              <Image src={Himage} alt="" />
              <h3 className="font-extrabold my-4">Phone</h3>
              <p className="mb-3">
                You contact us via phone during our business hours.
              </p>
              <u>+1 (555) 123-4567</u>
            </div>

            <div className="lg:w-2/5">
              <Image src={Himage} alt="" />
              <h3 className="font-extrabold my-4">Office</h3>
              <p className="mb-4">
                Visit our office for any in-person inquiries or assistance
              </p>
              <u> 123 Main St, Anytown, USA </u>
            </div>
          </div>
        </section>


        {/* Footer */}
        <Footer />

         
      </main>
    </>
  );
}
