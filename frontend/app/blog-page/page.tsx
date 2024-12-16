import Image from "next/image";
import Himage from "../../public/images/ano.webp";
import { MdOutlineMailOutline } from "react-icons/md";
import  Footer  from "@/components/home-components/Footer";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";



export default function Blog(){

    return(

        <>
      <main className="mx-4 lg:mx-10">
        {/* Discover the Best Blogs */}

        <section className="my-9 text-center">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Latest</span>
            <h3 className="font-bold text-4xl">Discover the Best Blogs</h3>
            <p className="font-medium">
              Stay updated with our featured blog posts
            </p>
          </div>

          <div className="mt-10 flex flex-row gap-4 text-center justify-center lg:mt-16">
            <button className="bg-white text-black border border-black border-solid py-2 px-4 hover:bg-black hover:text-white cursor-pointer">
              View All
            </button>
            <button className="hover:bg-black hover:text-white hover:border hover:border-black hover:border-solid hover:py-2 hover:px-4 cursor-pointer">
              Technology
            </button>
            <button className="hover:bg-black hover:text-white hover:border hover:border-black hover:border-solid hover:py-2 hover:px-4 cursor-pointer">
              Travel
            </button>
            <button className="hover:bg-black hover:text-white hover:border hover:border-black hover:border-solid hover:py-2 hover:px-4 cursor-pointer">
              Food
            </button>
            <button className="hover:bg-black hover:text-white hover:border hover:border-black hover:border-solid hover:py-2 hover:px-4 cursor-pointer">
              Lifestyle
            </button>
          </div>
        </section>

        {/* Articles section 1*/}

        <section className="mb-9 lg:my-16">
          <div className="lg:flex lg:gap-8 mt-4">
            {/* Service 1 */}
            <div className=" mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  10 Tips for Successful Blogging
                </h3>
                <p className="font-medium">
                  Learn how to create engaging content and grow your audience
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">John Doe</h3>
                    <p>11 Feb 2022 . 7 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}

            <div className="mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  The Art of Travel Photography
                </h3>
                <p className="font-medium">
                  Capture stunning moments with these experts tips
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p>15 Feb 2022 . 6 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  Delicious Recipes for Every Occasion
                </h3>
                <p className="font-medium">
                  Explore a variety of mouthwatering dishes to satisfy your
                  cravings.
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Emily Johnson</h3>
                    <p>20 Feb 2022 . 4 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles section 2 */}

        <section className="mb-9 lg:my-6">
          <div className="lg:flex lg:gap-8 mt-4">
            {/* Service 1 */}
            <div className=" mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  10 Must-Have Fashion Accessories
                </h3>
                <p className="font-medium">
                  Stay stylish with these trendy accessories for every outfit.
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Sarah Thompson</h3>
                    <p>25 Feb 2022 . 5 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}

            <div className="mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  Tips for a Healthy Lifestyle
                </h3>
                <p className="font-medium">
                  Discover the secrets of living a balanced and fulfilling life
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Micheal Brown</h3>
                    <p>1 Mar 2022 . 8 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Category</span>
                <h3 className="font-bold text-2xl">
                  Exploring the Outdoors: Hiking Tips
                </h3>
                <p className="font-medium">
                  Embark on unforgettable hiking adventures with these essential
                  tips.
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">David Wilson</h3>
                    <p>5 Mar 2022 . 9 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Hostel Life */}

        <section className="mb-9 text-center flex flex-col gap-4 lg:mb-16">
          <div>
            <span className="font-semibold">Latest</span>
            <h3 className="font-bold text-4xl">Discover the Hostel Life</h3>
            <p className="font-medium mt-4">
              Explore articles and insights about hostels and university life.
            </p>
          </div>
        </section>

        <section className="mb-9">
          <div className="lg:flex lg:gap-40">
            {/* Service 1 */}

            <div className=" mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">All</span>
                <h3 className="font-bold text-2xl">
                  10 Tips for a Successful Hostel Experience
                </h3>
                <p className="font-medium">
                  Learn how to make the most out of your hostel stay.
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">John Doe</h3>
                    <p>15 Jan 2022 . 7 min read</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}

            <div className="mb-8">
              <div className="mb-4">
                <Image src={Himage} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Tips</span>
                <h3 className="font-bold text-2xl">
                  How to Choose the Right Hostel for Yourself
                </h3>
                <p className="font-medium">
                  Find the perfect hostel that suits your needs and preferences.
                </p>
                <div className="flex gap-5">
                  <Image
                    src={Himage}
                    alt=""
                    className="rounded-[100%] h-[50px] w-[50px]"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p>20 Jan 2022 . 6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="border border-solid border-black py-2 px-4 bg-white text-black hover:bg-black hover:text-white cursor-pointer">
              View All
            </button>
          </div>
        </section>

        {/* Satisfied Customer */}

        <section className="mb-9 flex flex-col gap-4 mt-24">
          <h3 className="font-bold text-4xl">Satisfied Customers</h3>
          <p className="font-semibold">
            Read what our customers have to say about us
          </p>
        </section>

        <section className="lg:mb-12 lg:flex lg:gap-20">
          <div className="flex flex-col gap-4 mb-12">
            {/* 5 stars */}
            <div className="flex">
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
            </div>
            <p className="font-semibold">
              Our experience with the platform has been amazing!
            </p>
            <Image
              src={Himage}
              alt=""
              className="rounded-[100%] h-[50px] w-[50px]"
            />
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p>Hostel Manager, ABC Hostel</p>
            </div>
            <div className="flex gap-1">
              {/* Webflow Icon */}
              <FaWebflow className="text-3xl" />
              <span className="text-xl font-bold">Webflow</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {/* 5 stars */}
            <div className="flex">
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
            </div>
            <p className="font-semibold">
              I highly recommend this platform to all students!
            </p>
            <Image
              src={Himage}
              alt=""
              className="rounded-[100%] h-[50px] w-[50px]"
            />
            <div>
              <h3 className="font-semibold">Jane Smith</h3>
              <p>Student, XYZ University</p>
            </div>
            <div className="flex gap-1">
              {/* Webflow Icon */}
              <FaWebflow className="text-3xl" />
              <span className="text-xl font-bold">Webflow</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {/* 5 stars */}
            <div className="flex">
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
              <RiStarSFill className="text-3xl" />
            </div>
            <p className="font-semibold">
              Booking a hostel has never been easier!
            </p>
            <Image
              src={Himage}
              alt=""
              className="rounded-[100%] h-[50px] w-[50px]"
            />
            <div>
              <h3 className="font-semibold">David Johnson</h3>
              <p>Hostel Manager, 123 Hostel</p>
            </div>
            <div className="flex gap-1">
              {/* Webflow Icon */}
              <FaWebflow className="text-3xl" />
              <span className="text-xl font-bold">Webflow</span>
            </div>
          </div>
        </section>

        {/* Discover  Your Perfect Hostel */}

        <section className="my-11">
          <div className="text-left flex flex-col gap-6 lg:flex lg:flex-row lg:gap-40">
            <h2 className="font-bold text-4xl">Discover Your Perfect Hostel</h2>

            <div>
              <p className="font-medium pb-4">
                Find the best hostel accommodations for students near your
                university.
              </p>

              <button className="bg-black text-white py-2 px-4 mr-4 mb-5 hover:bg-white hover:text-black hover:border-black hover:border cursor-pointer">
                Sign Up
              </button>
              <button className="bg-white text-black py-2 px-5 border border-solid border-black hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}

        <section className="mb-16 lg:flex lg:flex-row lg:gap-60 lg:my-20">
          <div className="mb-9 flex flex-col gap-6 lg:my-auto">
            <h2 className="font-bold text-4xl">Subscribe to Our Newsletter</h2>
            <p className="font-medium">
              Stay updated with the latest blog post and exclusive content.
            </p>
            <form
              method="post"
              className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-3"
            >
              <input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Your email address"
                className="border border-black border-solid py-2 px-4 mr-5 sm:w-full md:w-full"
              />
              <button
                type="submit"
                className="bg-black text-white border border-black border-solid py-2 px-4 hover:bg-white hover:text-black sm:w-full md:w-full lg:max-w-28 cursor-pointer"
              >
                Join now
              </button>
            </form>
            <span className="text-sm font-semibold">
              By joining, you agree to our Terms and Conditions
            </span>
          </div>

          <Image src={Himage} alt="" className="lg:w-[600px]" />
        </section>

        {/* FAQ */}

        {/* FAQ */}
        <section className="p-4 mt-20 lg:w-3/5 lg:mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">FAQs</h1>
            <p className="mb-10">
              Find answers to commonly asked questions about our blog content
              and how to make the most of the information provided in our posts.
            </p>
          </div>
          <div className="font-bold space-y-4 mb-10 cursor-pointer">
            <div>
              <p className="border-t-2 border-b-2  border-black p-4 flex justify-between text-lg">
                How can I use the blog content effectively?
                <span className="text-2xl">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <div>
              <p className="border-t-2 border-b-2  border-black p-4 flex justify-between text-lg">
                How often is the blog updated?
                <span className="text-2xl">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <div>
              <p className="border-t-2 border-b-2  border-black p-4 flex justify-between text-lg">
                Can I share the blog post?
                <span className="text-2xl">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <div>
              <p className="border-t-2 border-b-2  border-black p-4 flex justify-between text-lg">
                How can I submit a guest Post?
                <span className="text-2xl">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <div>
              <p className="border-t-2 border-b-2 border-black p-4 flex justify-between text-lg">
                Can I request a specific topic?
                <span className="text-2xl">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
          </div>

          <div className="mb-20 text-center">
            <p className="text-2xl font-bold mb-5">Still have questions?</p>
            <p className="mb-10">Contact us for further assistance</p>
            <a className="border-2 border-black py-5 px-7 hover:bg-black hover:text-white cursor-pointer">
              Contact
            </a>
          </div>
        </section>

        {/* Get in touch and contact us */}

        <section className="mb-12 lg:flex lg:gap-80 lg:mt-10 lg:mx-16">
          <div className="flex flex-col gap-4 mb-12 lg:my-auto">
            <span className="font-semibold">Get in touch</span>
            <h3 className="font-bold text-4xl">Contact Us</h3>
            <p className="font-medium">
              Have a question or suggestion? We&apos;d love to hear from you!
            </p>
          </div>

          <div>
            <div className="mb-7 flex gap-2">
              {/* Email Icon */}
              <MdOutlineMailOutline className="text-3xl" />
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl">Email</span>
                <a href="" target="blank">
                  <u>info@hostelwebsite.com</u>
                </a>
              </div>
            </div>

            <div className="mb-7 flex gap-2">
              {/* Phone Icon */}
              <LuPhone className="text-3xl" />
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl">Phone</span>
                <u>+1 (555) 123-4567</u>
              </div>
            </div>

            <div className="mb-7 flex gap-2">
              {/* Phone Icon */}
              <SlLocationPin className="text-3xl" />
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl">Office</span>
                <span>123 Main St, Anytown, USA.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Image */}

        <section className="mb-9 lg:w-4/5 lg:mx-auto">
          <Image src={Himage} alt="" />
        </section>

        <Footer />
      </main>
    </>

    );

}