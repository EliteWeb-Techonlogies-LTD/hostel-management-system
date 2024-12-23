

import Image from "next/image"
import Img from "../../public/images/ano.webp"
import Img2 from "../../public/images/agoo-hostel.jpg"

export default function Locations(){
  return(
    <div className="flex flex-col gap-5 px-2 text-center lg:flex-row py-10 lg:px-10 lg:gap-16">
    <div className="flex-[1]">
      <Image src={Img} alt="" />
      <h1 className="py-2 text-2xl font-semibold">Sydney</h1>
      <p className="text-lg pb-3">123 Sample St, Sydney NSW 2000 AU</p>
      <p className="text-xl">Get Directions</p>
    </div>
    <div className="flex-[1]">
      <Image src={Img2} alt="" className="h-[370px]" />
      <h1 className="py-2 text-2xl font-semibold">New York</h1>
      <p className="text-lg pb-3">123 Sample St, New York NY 10000 USA</p>
      <p className="text-xl">Get Directions</p>
    </div>
  </div>
  )
}