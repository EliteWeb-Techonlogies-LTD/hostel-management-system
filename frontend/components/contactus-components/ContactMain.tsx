import GetInTouch from "../about-components/GetInTouch";
import Img from "../../public/images/ano.webp"
import Image from "next/image";
import Locations from "../about-components/Locations";
import Faq from "../home-components/Faq";



export default function ContactMain(){
  return(
    <section>
    {/* Get in Touch with us */}
    <div className="py-20 px-3 lg:px-10">
      <small className="text-xl font-bold py-6">Connect</small>
      <h2 className="text-4xl lg:text-6xl font-bold py-6">Get in Touch</h2>
      <p className="pb-5 text-lg">
        We&apos;re to here to help. Contact us with any questions or support needs.
      </p>
      <div className="flex gap-5 lg:gap-10">
        <button className="border-[1px] border-black text-xl bg-black text-white py-3 px-6">
          Contact
        </button>
        <button className="border-[1px] border-black text-xl py-3 px-6">
          Learn More
        </button>
      </div>
    </div>

    {/* Our Email, contact and office */}
    <div className="pt-10 pb-20 px-3 lg:px-10 flex flex-col lg:flex-row gap-10">
      <div>
        <p className="text-2xl font-bold">Email</p>
        <p className="py-5 text-lg">
          If you have questions or need assistance, please feel free o reach
          out to us.
        </p>
        <a href="#" className="underline text-lg">
          hello@relume.io
        </a>
      </div>

      <div>
        <p className="text-2xl font-bold">Phone</p>
        <p className="py-5 text-lg">
          You can contact us via phone during our business hours.
        </p>
        <a href="#" className="underline text-lg">
          +1 (555) 000-0000
        </a>
      </div>

      <div>
      <p className="text-2xl font-bold">Office</p>
      <p className="py-5 text-lg">Visit  our office during working hours for any inquiries or meetings.</p>
      <a href="#" className="underline text-lg">123 Sample St, New York, NY 10001</a>
      </div>
    </div>

    {/* contact us forms section */}
    <div className="text-center py-40 flex items-center justify-center w-full h-full">
     <div>
     <small className="text-xl font-bold">Streamline</small>
      <h1 className="text-4xl font-semibold py-5">Get In Touch</h1>
      <p className="text-xl">Have a Question? We&apos;re here to help!</p>
      <div className="">
      <GetInTouch/>
      </div>
     
     </div>
    </div>

    {/* Location */}
    <div className="text-center">
      <small className="text-xl font-bold">Discover</small>
      <h1 className="text-4xl font-bold py-6">Locations</h1>
      <p className="text-xl pb-10">Find our Service office location near you.</p>
    </div>
    <Locations/>

    <div className="flex flex-col lg:flex-row px-2 lg:px-14 gap-10 lg:gap-16 items-center py-10">
      <div className="flex-[1]">
        <Image src={Img} alt=""/>
      </div>
      <div className="flex-[1]">
        <p>stars</p>
        <p className="py-5 text-[1.6rem] font-bold">Our experience with hostel booking service has being expectional. The website is user-friendly and the booking process is seamless.</p>
        <div className="flex gap-5 items-center">
          <div className="border-r-[1px] border-black flex flex-col justify-center pr-2 pb-5">
            <h1 className="text-xl font-medium">John Doe</h1>
            <p>Hostel Manager, ABC Hoatel</p>
          </div>

          <div>
            Webflow
          </div>
        </div>
      </div>
    </div>

    {/* Faq section */}
    <div className="flex items-center justify-center w-full h-full text-center py-10 px-3">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold py-5">FAQs</h1>
        <p className="text-lg py-3">Find quick solutions to your inquries with our frequetly asked questions.</p>
        <Faq/>
        <p className="text-3xl lg:text-4xl py-5 font-bold">Still have questions?</p>
        <p className="text-lg">Contact us for further assistance.</p>
        <button className="border-[1px] border-black my-5 px-5 py-2 text-xl">Contact</button>
      </div>
    </div>

    <div className="bg-slate-800 my-20 py-10 text-white lg:px-20 px-3">
      <h1 className="text-5xl lg:text-6xl font-semibold py-7">Contact Us for Assistance </h1>
      <p className="text-xl py-6">If you have any questions or need help, feel free to reach out to us.</p>
      <div className="flex gap-5 lg:gap-10 py-10">
        <button className="border-[1px] border-black text-xl bg-black text-white py-3 px-6">
          Contact
        </button>
        <button className="border-[1px] border-white text-xl py-3 px-6">
          Learn More
        </button>
      </div>
    </div>
  </section>
  )
}