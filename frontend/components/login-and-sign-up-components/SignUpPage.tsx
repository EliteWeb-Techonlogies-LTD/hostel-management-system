import { RxAvatar } from "react-icons/rx";
import { FaLock } from "react-icons/fa6";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import "@/public/css/style2.css";

export default function SignUpPage() {
  return (
    <main className="lg:flex lg:max-w-[900px] justify-center items-center lg:mx-auto mt-2 h-[100vh]">
      <section className="bg-white py-12 lg:w-[550px] text-center lg:max-w-[550px] lg:mx-auto log rounded-lg h-[600px]">
        <div className="block lg:block">
          <h1 className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#332790] to-[#8d1a9b] text-5xl font-bold after:content-[''] after:w-[60px] after:h-1 after:bg-purple-800 after:absolute after:bottom-[-5px] after:-translate-y-1/2 after:left-[230px]">
            SIGN UP
          </h1>

          <form action="#" method="post" className="mt-16">
            <div className="flex flex-row mb-6">
              <div className="flex flex-row mb-5 gap-2 text-black border-2 border-gray-500 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 pb-5 items-center">
                <RxAvatar className="text-2xl" color="#8d1a9b"/>
                <label htmlFor="FullName" className="text-xl">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                name="FullName"
                id="FullName"
                className="border-2 border-gray-500 px-4 max-w-[300px] border-t-0 border-l-0 border-r-0 relative top-[-20px] focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-row mb-6">
              <div className="flex flex-row mb-5 gap-2 text-black border-2 border-gray-500 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 pb-5 items-center">
                <FaPhone className="text-2xl" color="#8d1a9b"/>
                <label htmlFor="Phone" className="text-xl">
                  Phone
                </label>
              </div>
              <input
                type="tel"
                name="Phone"
                id="Phone"
                className="border-2 border-gray-500 px-4 max-w-[300px] border-t-0 border-l-0 border-r-0 relative top-[-20px] focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-black"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex flex-row mb-6">
              <div className="flex flex-row mb-5 gap-2 text-black border-2 border-gray-500 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 pb-5 items-center">
                <FaLock className="text-2xl" color="#8d1a9b"/>
                <label htmlFor="Password" className="text-xl">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="Password"
                id="Password"
                className="border-2 border-gray-500  px-4 max-w-[300px] border-t-0 border-l-0 border-r-0 relative top-[-20px] focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-black"
                placeholder="Enter your Password"
              />
            </div>

            <div className="mt-10 mx-auto">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#332790] to-[#8d1a9b] text-white py-2 px-12 rounded-full hover:from-purple-950 hover:to-blue-600 text-xl font-bold z-50 shadow-md"
              >
                Sign UP
              </button>
            </div>

            <div className="lg:hidden my-8 text-center">
              <p>
                Already have an Account?{" "}
                <Link
                  href="/login"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

      </section>

      <section className="hidden lg:flex items-center justify-center lg:w-[500px]  sidePane text-white h-[600px]">
        <div className="flex flex-col justify-center items-center gap-5 w-[400px]  p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <GiPalmTree />
            <h2 className="text-2xl font-bold">Logo Here</h2>
          </div>
          <h3 className="text-4xl font-bold">Glad to see you!</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            earum, temporibus facere modi vel, error velit amet dolorum harum
            fugiat maiores magni facilis, impedit quidem ex recusandae quis
            aliquid? Atque!
          </p>

          <div className="mt-10 mx-auto">
            <Link href="/login">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 via-blue-900 to-purple-950 text-white py-2 px-12 rounded-full hover:from-purple-950 hover:to-blue-600 text-xl font-bold z-50 shadow-md"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
