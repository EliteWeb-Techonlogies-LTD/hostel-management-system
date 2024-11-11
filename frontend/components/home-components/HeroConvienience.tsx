
import Image from "next/image"
import Img from "../../public/images/agoo-hostel.jpg"

export default function HeroConvienience (){
  return (
    <div className='xl:flex items-center gap-16 md:px-[4rem] py-2 px-5'>
    <div className='w-[50%] leading-loose'>
    <small className='font-bold text-lg'>Convenience</small>
    <h1 className='md:text-5xl text-4xl font-bold pt-5 pb-8 md:w-[600px] leading-[67px] w-[340px]'>Find the Perfect Hostel for You</h1>
    <p className='pb-7 text-xl leading-loose w-[350px] md:w-[600px]'>Our hostel website offers students the Convenience of easily finding and booking the perfect accommodation near their university. With a wide variety of hostels to choose from, students can find a lace that suits heir needs and preferences. Plus, our services s affordable, ensuring that students can find a hostel that fit their budget.</p>

    <div className='flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5'>
      <button className='border-[1px] border-black py-2 px-8 text-xl'>Learn More</button>
      <button className='text-xl font-bold'>Sign Up</button>
    </div>
    </div>
    <div>
      <Image src={Img} alt=""/>
    </div>
   </div>
  )
}