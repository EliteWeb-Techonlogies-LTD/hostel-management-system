

export default function Hero () {
  return (
    <section className="flex items-center justify-center w-full h-[60vh]">
      <div>
      <h1 className="text-5xl lg:text-7xl lg:w-[850px] text-center md:w-[600px] md:mx-auto font-semibold py-6 leading-snug">Find the perfect 
       hostel for your stay</h1>
      <p className="text-lg text-center text-wrap py-2">Welcome to our hostel booking website. Discover a wide range of affordable and convinient 
         hostels near your university.</p>

         <div className="flex gap-5 justify-center w-full py-10">
         <button className='bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]'>Explore</button>
          <button className='border-[0.5px] border-black py-2 px-5'>Learn More</button>
         </div>
      </div>
    </section>
  );
}