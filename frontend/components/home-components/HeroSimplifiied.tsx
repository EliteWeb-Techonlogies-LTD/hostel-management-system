
import { FaCube } from "react-icons/fa";
import Image from "next/image";
import Img from "../../public/images/ano.webp"

export default function HeroSimplified (){
  return (
    <div className='xl:flex items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-10'>
    <div>
      <small className='font-semibold text-lg'>Simplified</small>
      <h1 className='md:text-5xl text-4xl font-bold py-3 md:w-[600px] leading-[67px] w-[340px]'>Find and Book your 
       Ideal Hostel</h1>
      <p className='text-xl leading-loose w-[350px] md:w-[600px]'>Booking a hostel has never being easier. Follow our 
       step-by-step guide to secure your accommodation hasle-free.</p>

      <div className='lg:flex gap-10 items-center py-5'>
        <div>
        <FaCube className='text-3xl mb-5' />
          <h1 className='text-xl font-bold pb-5'>Easy Booking</h1>
          <p>Browse through a wide selection of hostels near your university.</p>
        </div>
        <div>
        <FaCube className='text-3xl mb-5' />
          <h1 className='text-xl font-bold pb-5'>Convenient Options</h1>
          <p>Choose from different amenities and room types to suit your preferences.</p>
        </div>
      </div>
      <div className='flex gap-10 pb-10'>
        <button className='bg-black text-white py-2 px-5 border-2 border-black rounded-[2px]'>Explore</button>
        <button className='border-[0.5px] border-black py-2 px-5'>Learn More</button>
       </div>
    </div>

    <div>
      <Image src={Img} alt="" height={1500}/>
    </div>
  </div>
  )
}