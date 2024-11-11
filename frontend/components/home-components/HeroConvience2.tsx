
import { FaCube } from "react-icons/fa"

export default function HeroConvienience2 () {
  return (
    <div className='xl:flex items-center md:px-[4.5rem] pt-5 px-5 pb-10'>
      <div>
        <div className='flex flex-wrap md:block xl:flex gap-10'>
          <div className='flex-[1]'>
            <small className='text-lg font-bold'>Convenient</small>
            <h1 className='text-5xl font-medium capitalize py-5 leading-snug'>Discover More about our hostel services</h1>
          </div>

          <div className='flex-[1]'>
            <p className='text-xl leading-relaxed'>In addition to providing comfortable accommodation we offer a range of 
            support services,valuable hostel management resources, and exciting community events. Our goal is to create a 
              vibrant and inclusive iving environment for all students</p>
          </div>
        </div>

        <div className='flex flex-wrap md:block xl:flex gap-10 py-10'>
          <div className='flex-[1]'>
            <FaCube className='text-3xl mb-5' />
            <h1 className='text-3xl font-semibold py-4'>Support Services</h1>
            <p>Our dedicated team is available 24/7 to assist you with any queries or concerns you may here.</p>
          </div>
          <div className='flex-[1]'>
            <FaCube className='text-3xl mb-5' />
            <h1 className='text-3xl font-semibold py-4'>Hostel Management Resources</h1>
            <p>
              We provide hostel managers with advance tools and software o streamline their operations and enhance 
               eficiency.</p>
          </div>
          <div className='flex-[1]'>
            <FaCube className='text-3xl mb-5' />
            <h1 className='text-3xl font-semibold py-4'>Community Events</h1>
            <p>JOin our vibrant community and participate n a variety of engaging events nd activies.</p>
          </div>
        </div>

        <div className='flex items-center md:gap-10 w-[300px] pb-10 pt-5 gap-5'>
          <button className='border-[1px] border-black py-2 px-8 text-xl'>Learn More</button>
          <button className='text-xl font-bold'>Sign Up</button>
        </div> 
      </div>
    </div>
  )
}