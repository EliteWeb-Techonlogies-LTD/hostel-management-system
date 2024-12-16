
import Link from "next/link"


export default function Login (){
  return (
    <>
   <section className="bg-[#FAF9F6] h-[100vh] flex items-center justify-center">
    <div className="shadow-2xl px-5 py-10 w-full lg:w-[500px] rounded-e-[2rem] z-10 bg-white rounded-s-[10px]">
      <h1 className="text-3xl font-bold mb-2 text-center">Login</h1>
      <p className="text-center border-b-2 w-full py-2">Login into your account now!!!</p>

      <form action="" className="pt-10">
        <label htmlFor="name" className="text-xl block pb-3">Name</label>
        <input type="text" id="name" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black" required/>

        <label htmlFor="contact" className="text-xl block pt-8 pb-3">Phone Number</label>
        <input type="tel" id="contact" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black" required/>

        <label htmlFor="password" className="text-xl block pt-8 pb-3">Password</label>
        <input type="password" id="password" className="border-[1px] border-slate-600 h-[50px] w-full rounded-md px-3 text-xl focus:outline-none text-black" required/>

        <input type="submit" value="Login" className="w-full bg-[#000] py-3 rounded-b-xl rounded-l-xl mt-5 text-2xl font-medium text-white"/>
     
      </form>
      {/* <button className="w-full bg-[#000] py-3 mt-5 rounded-sm text-2xl font-semibold text-white">Login</button> */}
      <p className="text-center py-3"><Link href="/forgot-password" className="font-light underline text-slate-500 hover:text-slate-700">Forgot Password? </Link></p>
      <p className="text-center">Don&apos;t have an account? <Link href="/signup" className="text-lg text-gray-400 underline font-light">Sign up</Link></p>
    </div>
   </section>
   </>
  )
}