import { FaCube } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import Host from "../../public/images/host.jpg";

export default function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-20 px-14">
      <div className="flex-[1.5]">
          <Image src={Host} alt="" className="h-[500px]"/>
      </div>
      <div className="flex-[1]">
        <div>
          <p className="text-6xl mb-8">
            <FaCube />
          </p>
          <h1 className="text-4xl font-bold mb-5">
            About Our Website: Solving Hostel Needs.
          </h1>
          <p>
            Our Website was created to address the needs of students and hostel
            managers. We provide a platform where students can easily find and
            book hostels near their university, while also helping hostel
            managers efficiently to manage their properties.
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
    </section>
  );
}
