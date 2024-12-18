import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[85vh] pt-36 hero">
      <h1 className="text-5xl lg:text-7xl lg:w-[850px] text-center md:w-[600px] md:mx-auto font-extrabold py-6 leading-snug text-[#000]">
        Find the perfect hostel for your stay
      </h1>
      <p className="text-lg text-black text-center text-wrap py-2 lg:w-2/5 mx-auto">
        Welcome to our hostel booking website. Discover a wide range of
        affordable and convenient hostels near your university.
      </p>

      <div className="flex gap-5 justify-center w-full py-10 text-[#FAF9F6]">
        <Link href="/hostel"><button className="bg-white text-black border-[1px] border-black py-2 px-5 rounded-[2px] font-semibold text-xl transition ease-in-out duration-300">
          Explore
        </button></Link>
        <Link href="/project"><button className="py-2 px-2 font-semibold text-xl  rounded-[2px] h hover:border-[1px] bg-white text-black border-[1px] border-black">
          Learn More
        </button></Link>
      </div>
    </section>
  );
}
