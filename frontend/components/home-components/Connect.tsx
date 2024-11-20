
import { SiGmail } from "react-icons/si"
import { FaPhone } from "react-icons/fa6"
import { FaLocationPin } from "react-icons/fa6"


export default function Connect () {
  return (
    <section className="px-3 py-20 flex flex-col lg:flex-row lg:gap-20 gap-10 lg:px-20 justify-between w-full">
      <div>
        <small className="font-semibold text-lg py-5">Connect</small>
        <h1 className="text-3xl font-bold py-5">Get In Touch</h1>
        <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <div className="lg:pr-60">
        <div className="flex gap-10 items-start">
          <SiGmail size={30}/>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Email</p>
            <p className="underline">contact@hostelhub.com</p>
          </div>
        </div>
        <div className="flex gap-10 items-start py-5">
          <FaPhone size={30}/>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Phone</p>
            <p className="underline">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex gap-10 items-start">
          <FaLocationPin size={30}/>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Office</p>
            <p className="underline">123 main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </section>
  )
}