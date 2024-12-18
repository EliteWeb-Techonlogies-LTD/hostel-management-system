import Image from "next/image";
import Img from "../../public/images/agoo-hostel.jpg";

export default function DiscoverHostel() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-20 px-2 lg:px-14 py-20">
      <div className="flex-[1.2]">
        <Image src={Img} alt="" />
      </div>
      <div className="flex-[1]">
        <small className="font-semibold text-lg">Discover</small>
        <h2 className="font-bold text-3xl pb-5 pt-3">
          Hostel of the Week: Unforgettable Stays
        </h2>
        <p className="text-lg">
          Experience the best hostel stays with our &ldquo;Hostel of the
          Week&rdquo; feature. Each week, we showcase a unique and exceptional
          hostel that offers Unforgettable experience for students. From
          stunning locations to top-notch amenities, these hostels are
          hand-picked to to ensure an amazing stay for you.
        </p>
        <button className="bg-white text-black py-2 px-5 border border-black mb-7 mt-6 font-semibold  cursor-pointer">
          Learn More
        </button>
        <span className="p-3 mb-7 mt-6 font-semibold hover:bg-black hover:text-white hover:border-black hover:border hover:cursor-pointer cursor-pointer">
          Book Now &nbsp;&nbsp;
        </span>
      </div>
    </section>
  );
}
