import Image from "next/image";
import Link from "next/link";

export default function ViewHostels() {
  return (
    <section className="px-2 lg:px-14">
      <div className="flex items-center justify-center text-center flex-col py-10">
        <span className="font-semibold">Hostels</span>
        <h2 className="font-bold text-3xl my-3">Find Your Ideal Hostel</h2>
        <p className="font-medium">Discover the Best Hostels for Students</p>
      </div>

      <div className="mb-5 lg:flex lg:gap-20">
        {hostels.map((hostel) => (
            <div className="my-4" key={hostel.id}>
              <Image src={hostel.img} alt="" width={1000} height={1000} />
              <h3 className="mt-4 font-bold mb-2 text-lg">{hostel.name}</h3>
              <p className="font-medium mb-4">{hostel.desc}</p>
              <div className="flex gap-2 mb-10">
              <button className="bg-black font-semibold px-3 py-2 text-white">
                Affordable
              </button>
              <button className="bg-black  font-semibold px-3 py-2 text-white">
                Convenient
              </button>
              <button className="bg-black  font-semibold px-3 py-2 text-white">
                Safe
              </button>
            </div>

            <span className="p-3 mb-4 font-semibold bg-black text-white">
              View Hostel &nbsp;&nbsp;
            </span>
            </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
          <Link href="/"><button className="bg-black text-white text-xl font-medium py-2 px-5">View all</button></Link>
      </div>
    </section>
  );
}

const hostels = [
  {
    id: 1,
    img: "/images/ano.webp",
    name: "Green Hostel",
    desc: "Discover a Variety of Hostels for Every Budget and Preference",
  },
  {
    id: 2,
    img: "/images/ano.webp",
    name: "Blessing Hostel",
    desc: "Explore the Hostel&apos;s Amenities and Features",
  },
];
