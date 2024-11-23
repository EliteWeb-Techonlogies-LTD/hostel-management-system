import Link from "next/link"

export default function Navbar (){
  return (
    <header className="block lg:flex items-center gap-10 px-2 lg:border-b-[1px] border-slate-500">
      <div>
        <h1 className="py-5 text-2xl font-bold">Logo</h1>
      </div>

      <nav className="flex flex-col lg:flex-row lg:items-center justify-between w-full ">
        <ul className="flex flex-col lg:flex-row gap-5 text-lg">
          <li><Link href="/">Explore Hostels</Link></li>
          <li><Link href="/about">Book Now</Link></li>
          <li><Link href="/project">Contsct Us</Link></li>
          <li><Link href="">More Options</Link></li>
        </ul>

        <div className="flex flex-col lg:flex-row py-8 gap-5">
          <button className="border-[1px] border-black bg-white py-2 px-5">Sign Up</button>
          <button className="border-[1px] border-black bg-black text-white800 py-2 px-5">Log In</button>
        </div>
      </nav>
    </header>
  
  )
}