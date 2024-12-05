
import Link from "next/link"
import Image from "next/image"
import Img from "../../public/images/Secure-login-amico.png"

export default function Login (){
  return (
    <>
   <section className="bg-[#FAF9F6] h-[100vh] flex items-center justify-center">
    <div className="shadow-2xl bg-gradient-to-b from-[#4A90E2] to-[#1A355E] shadow-[#1a355e60] px-5 py-10 w-full lg:w-[500px] rounded-e-[2rem] z-10 bg-white rounded-s-[10px]">
      <h1 className="text-3xl font-bold mb-2 text-center text-white">Login</h1>
      <p className="text-center border-b-2 w-full py-2">Login into your account now!!!</p>

      <form action="" className="pt-10 text-white">
        <label htmlFor="name" className="text-xl block pb-3">Name</label>
        <input type="text" id="name" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black"/>

        <label htmlFor="contact" className="text-xl block pt-8 pb-3">Phone Number</label>
        <input type="tel" id="contact" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black"/>

        <label htmlFor="password" className="text-xl block pt-8 pb-3">Password</label>
        <input type="password" id="password" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black"/>

     
      </form>
      <p className="py-3 font-bold text-[#F5C542]">Forgot Password? <Link href="/forgot-password" className="font-light underline text-gray-400">Click Here</Link></p>
      <p className="text-lg font-semibold text-[#F5C542]">Don&apos;t have an account? <Link href="/signup" className="text-lg text-gray-400 underline font-light">Sign up</Link></p>
     

      <button className="w-full bg-[#4A90E2] py-3 mt-5 rounded-sm text-2xl font-semibold text-white">Login</button>
    </div>

    <div className="hidden w-[560px] bg-white h-[83vh] ml-[-20px] rounded-e-[2rem] lg:flex items-center justify-center text-center shadow-2xl">

      <div>
      <Image src={Img} alt="" className=""/>
      </div>
    </div>
   </section>
   </>
  )
}