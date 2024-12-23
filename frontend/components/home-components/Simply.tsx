import { FaCube } from "react-icons/fa";
import Image from "next/image";
import Img from "../../public/illutration/Houses-amico.png"
import Link from "next/link";

export default function Simply() {
  return (
    <section className="xl:flex items-center gap-10 md:px-[4.5rem] px-5 pt-10">
      <div className="flex-[1]">
        <small className="font-semibold text-lg">Simplified</small>
        <h1 className="md:text-5xl text-[#332590] text-4xl font-bold py-3 md:w-[600px] leading-[67px] w-[340px]">
          Find and Book your Ideal Hostel
        </h1>
        <p className="text-xl leading-loose w-[350px] md:w-[600px]">
          Booking a hostel has never being easier. Follow our step-by-step guide
          to secure your accommodation hassle-free.
        </p>

        <div className="lg:flex gap-10 items-center py-5">
          {simply.map((content) => (
            <div key={content.id}>
            <FaCube className="text-3xl mb-5 text-black" />
            <h1 className="text-xl font-bold pb-5 text-[#000]">{content.title}</h1>
            <p>{content.desc}</p>
          </div>
          ))}
        </div>
        <div className="flex gap-10 pb-10">
        <Link href="/hostel"><button className="text-white border-[1px] border-[#332590] bg-[#332590] hover:border-[#332590] hover:bg-inherit hover:text-[#332590] py-2 px-5 rounded-full font-semibold text-xl transition ease-in-out duration-300">
          Explore
        </button></Link>
        <Link href="/project"><button className="py-2 px-2 font-semibold text-xl  rounded-full h hover:border-[1px] text-[#332590] border-[1px] border-[#332590] hover:bg-#fff hover:text-[#332590] hover:border-[#332590] hover:shadow:lg">
          Learn More
        </button></Link>
            </div>
      </div>
      <div className="flex-[1.5]">
            <Image src={Img} alt="" className="h-[70vh]" />
          </div>
    </section>
  );
}


const simply =[
  {
    id: 1,
    title: "Easy Booking",
    desc: "Browse through a wide selection of hostels near your university."
  },
  {
    id: 2,
    title: "Convenient Options",
    desc: " Choose from different amenities and room types to suit your preferences."
  },
]