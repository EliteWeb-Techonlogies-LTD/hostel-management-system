
import { GoChevronRight } from "react-icons/go";
import { FaCube } from "react-icons/fa6";
import { FaWebflow } from "react-icons/fa6";


export default function Awards () {
  return (
    <section className="flex items-center justify-between flex-col lg:flex-row px-2 lg:px-14">
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
    </section>
  )
}