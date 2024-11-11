
import Image from "next/image";
import Img from "../../public/images/img.webp"

export default function Hero2 () {
  return (
    <section className="flex flex-col lg:flex-row gap-10 px-3 lg:px-20 items-center">
      <div className="flex-[1]">
        <h1 className="text-4xl font-semibold lg:text-5xl">Discover the Best Hostels near Your University</h1>
        <p className="py-5 text-lg">Find the perfect place to stay with our extensive selection of hostels. Book now and 
         enjoy a comfortable and convinient experience</p>

         <div className="flex flex-col md:flex-row gap-5">
           <div>
            <h1 className="text-5xl font-bold py-5">50%</h1>
            <p>Hostels available 1000+ | Students Served: 5000+ | Bookings Made: 10000+</p>
           </div>
           <div>
            <h1 className="text-5xl font-bold py-5">50%</h1>
            <p>Satisfied Students: 95% | Successful Bookings: 98% | Happy Hostel Managers</p>
           </div>
         </div>
      </div>
      <div className="py-5 flex-[1]">
        <Image src={Img} alt="" className="lg:h-[400px]"/>
      </div>
    </section>
  );
}