import Image from "next/image";

export default function Cards() {
  return (
    <section className="p-4 md:px-[4.5rem] lg:mt-7">
      <div className="">
        <p className="font-bold">Discover</p>
        <h1 className="text-4xl font-bold mb-6 mt-4 w-[320px] lg:w-full ">
          Find and Book Your Perfect Hostel
        </h1>
        <p className="w-[320px] lg:w-full">
          Searching, comparing and booking hostels has never been easier. With
          our platform you can quickly find and reserve the perfect hostel for
          your needs.
        </p>
      </div>

      {/* cards */}
      <div className="mt-10 flex flex-col gap-6 lg:flex-row justify-center">
        {cardDetails.map((cards) => (
          <div key={cards.id}>
            <Image src={cards.img} alt={cards.title} width={1000} height={1000}/>
            <h2 className="text-2xl font-bold">{cards.title}</h2>
            <p className="text-lg">{cards.desc}</p>
          </div>
        ))}
      <div>
      </div>
      </div>
    </section>
  );
}

const cardDetails = [
  {
    id: 1,
    img: "/images/agoo-hostel.jpg",
    title: "Search Your Ideal Hostel",
    desc: " Use our intuitive search function to browse through a wide selection of hostels near your university.",
  },
  {
    id: 2,
    img: "/images/ano.webp",
    title: "Compare Prices and Amenities",
    desc: " Compare prices, amenities and reviews to make an informed decision.",
  },
  {
    id: 3,
    img: "/images/ano.webp",
    title: "Book a Reserve with Confidence",
    desc: "  Once you&apos;ve found the perfect hostel, book and reserve it hassle-free through our secure platform.",
  },
];
