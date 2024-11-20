
import Image from "next/image"
import Img from "../../public/images/ano.webp"

export default function Hero4 () {
  return (
    <section className="border-[1px] border-black mx-3 my-5 lg:mx-20 pt-5 lg:pt-0 flex flex-col lg:flex-row items-center gap-10">
      <div className="px-5 ">
        <h1 className="text-4xl font-semibold py-5">Get the Latest Updates Here</h1>
        <p className="text-lg">Subcribe to our newsletter for the latest updates, tips, and promtions.</p>

        <form action="" className="py-5">
          <input type="email"  placeholder="Enter Your Email" className="border-black border-[1px] w-[90%] h-12 px-5"/>
          <button className="bg-black text-white900 w-[90%] my-5 h-12">Sign Up</button>
        </form>
        <p className="py-5 text-sm">By clicking Sign Up, you confirm that you agree with our Terms and Conditions.</p>
      </div>
      <div >
        <Image src={Img} alt=""/>
      </div>
    </section>
  )
}