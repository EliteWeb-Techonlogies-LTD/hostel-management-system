
import Image from "next/image"
import Img1 from "../../public/images/agoo-hostel.jpg"
import Img2 from "../../public/images/ano.webp"
import Img3 from "../../public/images/img.webp"


export default function DiscoverCards () {
  return (
    <div>
      <div className='lg:block xl:flex flex-wrap items-center gap-10 pt-10 pb-[3rem] px-5'>
        <div className=''>
           <Image src={Img1} alt="" className="py-5 lg:py-0"/>
           <h1 className='text-2xl md:text-4xl xl:text-2xl md:py-5 font-semibold py-3'>Search for Your Ideal Hostel</h1>
           <p>Use our intuitive search function to browse through a wide selection of hostels near your university.</p>
        </div>
        <div className=''>
           <Image src={Img2} alt="" className="h-[275px] py-5 lg:py-0"/>
           <h1 className='text-2xl md:text-4xl xl:text-2xl md:py-5 font-semibold py-3'>Compare Prices and Amenities</h1>
           <p>Easily compare prices, amenities and reviews to make an informed decision.</p>
        </div>
        <div className=''>
           <Image src={Img3} alt="" className="h-[275px] py-5 lg:py-0"/>
           <h1 className='text-xl md:text-4xl xl:text-2xl md:py-5 font-semibold py-3'>Book and Reserve with Confidence</h1>
           <p>Use our intuitive search function to browse through a wide selection of hostels near your university.</p>
        </div>
      </div>
    </div>
  )
}