
import Image from "next/image"
import Img from '../../public/images/img.webp'

export default function HeroSecure (){
  return (
    <div className='xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10'>
      <div>
        <div>
          <h1 className='text-3xl font-semibold py-3'>Secure Bookings</h1>
          <p className='text-[16px]'>Easily book and reserve hostels with out secure online platform.</p>
        </div>
        <div>
          <h1 className='text-3xl font-semibold py-3'>Wide Selection</h1>
          <p className='text-[16px]'>Choose from a wide variety of hostels to the find the perfect accommodation for your  needs.</p>
        </div>
        <div>
          <h1 className='text-3xl font-semibold py-3'>Management Tools</h1>
          <p className='text-[18px]'>Hostels Managers can easily keep track of students and efficiently manage their accommodations.</p>
        </div>
      </div>
      <div className="py-5">
         <Image src={Img} alt=""/>
      </div>
    </div>
  )
}