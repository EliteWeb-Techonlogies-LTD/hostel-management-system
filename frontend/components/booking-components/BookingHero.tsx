import "../../public/css/style.css"

export default function BookingHero() {
  return (
    <section className="flex flex-col text-center items-center justify-center gap-5 lg:px-20 text-[#000] h-[85vh] BookingHero">
      <div className="text-white">
        <small className="text-lg font-medium">Find</small>
        <p className="text-5xl font-semibold py-5">Book Your Stay</p>
      </div>
      <div className="">
        <p className="font-medium w-full text-wrap lg:w-[480px] text-gray-200">
          Welcome to our booking page! Find the perfect hostel for your stay
          near the university. Browse through our wide selection of affordable
          and comfortable accommodations.
        </p>

        <div className="flex items-center justify-center gap-10 my-6">
          <button className="bg-[#000] text-[#fff] text-xl px-5 py-3">
            Search
          </button>
          <button className="border-[1.5px] px-5 py-3 text-xl bg-[#fff] text-[#000]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
