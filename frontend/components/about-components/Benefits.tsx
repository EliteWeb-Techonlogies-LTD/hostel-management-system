

import { FaCube } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import Img from "../../public/images/ano.webp"


export default function Benefits () {
  return(
    <div className=" my-20 lg:flex justify-between lg:px-14 px-2 py-20">
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
      <Image src={Img} alt="image" />
    </div>
  </div>
  )
}