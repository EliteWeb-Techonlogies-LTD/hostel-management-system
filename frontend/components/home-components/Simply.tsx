import { FaCube } from "react-icons/fa";
import Image from "next/image";
import Img from "../../public/images/agoo-hostel.jpg"

export default function Simply() {
  return (
    <section className="xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10">
      <div className="flex-[1]">
        <small className="font-semibold text-lg">Simplified</small>
        <h1 className="md:text-5xl text-4xl font-bold py-3 md:w-[600px] leading-[67px] w-[340px]">
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
            <button className="bg-[#fff] border-[1px] border-[#000] text-[#000] py-2 px-5 rounded-[2px] font-semibold text-xl">
              Explore
            </button>
            <button className="py-2 px-2 bg-[#000] border-[1px] border-[#000] text-[#FAF9F6] font-semibold text-xl rounded-[2px]">
              Learn More
            </button>
            </div>
      </div>
      <div className="flex-[1.5]">
            <Image src={Img} alt="" className="h-[60vh]" />
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