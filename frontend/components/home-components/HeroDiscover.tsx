
import { SlArrowRight } from "react-icons/sl";
// import Image from "next/image";
// import Img2 from "../../public/images/ano.webp"


export default function HeroDiscover (){
  return (
    <div className="p-4">
            <div className="w-[700px]">
                <p className="font-bold">Discover</p>
                <h1 className="text-3xl font-bold mb-6 mt-4">Find and Book Your Perfect Hostel</h1>
                <p className="">Searching, comparing and booking hepstels has never been easier. 
                    With our platform you can quickly find and reserve the perfect hostel for your needs.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3 justify-center">
                <div>
                    {/* <Image src={Img2} alt="" className="py-5 lg:py-0"/> */}
                    <div className="mt-6">
                        <p className="text-2xl font-bold">Search Your Ideal Hostel</p>
                        <p className="mt-6">Use our intuitive search function to browse through a wide selection of hostels near your university.</p>
                    </div>
                </div>
                <div className="">
                    {/* <Image src={Img2} alt="" className="py-5 lg:py-0"/> */}
                    <div className="mt-6">
                        <p className="text-2xl font-bold">Compare prices and amenities</p>
                        <p className="mt-6">Easily compare prices, amenities and reviews to make an informed decision.</p>
                    </div>
                </div>
                <div className="">
                    {/* <Image src={Img2} alt="" className="py-5 lg:py-0"/> */}
                    <div className="mt-6">
                        <p className="text-2xl font-bold">Book a Reserve with Confidence</p>
                        <p className="mt-6">Once you&apos;ve found the perfect hostel, book and reserve it hassle-free through our secure plartform.</p>
                    </div>
                </div>
            </div>

            <div className="w-96 flex mt-10 gap-4 lg:mt-16">
                <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">Learn More</button>
                <button className="flex items-center gap-3 transition ease-in-out duration-300">Sign Up <SlArrowRight /></button>
            </div>
        </div>
  )
}