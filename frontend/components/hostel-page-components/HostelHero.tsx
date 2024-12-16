export default function HostelHero() {
  return (
    <section>
      <div className="text-left flex flex-col items-center justify-center h-[70vh] lg:gap-4">
        <h2 className="font-bold text-3xl lg:text-5xl w-[90%] lg:w-2/4 text-center leading-normal">
          Find Your Perfect Hostel Near the University
        </h2>
          <p className="font-medium pb-4 w-[330px] lg:w-[550px] text-center">
            Welcome to our hostel website! Discover and book the ideal
            accommodation for your university life.
          </p>

          <div className="flex items-center">
            <input type="text" className="border border-slate-700 h-[50px] lg:w-[550px] rounded-s-full px-5 text-lg focus:outline-none"/>
          <button className="bg-black text-white h-[50px] px-4 cursor-pointer rounded-e-full">
            Search
          </button>
          </div>
      </div>
    </section>
  );
}
