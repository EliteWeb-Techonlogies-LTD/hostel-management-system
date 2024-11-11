

export default function Hero3 () {
  return (
    <section className="flex items-center justify-center w-full px-5 h-[60vh]">
      <div>
        <h1 className="text-center text-4xl font-semibold py-5 lg:text-5xl">Find Your Perfect Hostel</h1>
        <p className="text-center ">Discover affordable and convinient hostels near your university.</p>

        <div className='flex gap-10 py-5 items-center justify-center w-full'>
          <button className='bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]'>Search</button>
          <button className='border-[0.5px] border-black py-2 px-5'>Sign Up</button>
        </div>
      </div>
    </section>
  )
}