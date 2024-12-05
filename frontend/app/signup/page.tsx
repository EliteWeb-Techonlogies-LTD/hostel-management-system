import Navbar from "@/components/home-components/Navbar";


export default function Signup (){
    return (
      <>
        <Navbar/>
        <div>
            <div className="flex items-center justify-center min-h-screen bg-inherit">
                <div className="w-full max-w-4xl bg-gradient-to-b from-[#4A90E2] to-[#1A355E] rounded-lg shadow-md flex">
   
                    <div className="bg-white w-full max-w-md rounded-tr-[50px] rounded-br-[50px] shadow-md">
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-gradient-to-b from-[#4A90E2] to-[#1A355E] text-center">Create an Account</h2>
                        <form id="signup-form" className="mt-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-600">Name</label>
                                <input id="name" type="text" placeholder="Enter Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"/>
                            </div>
                            <div className="mt-4">
                                <label className="block text-lg font-medium text-gray-600">Phone Number</label>
                                <input id="text" type="tel" placeholder="Enter Phone Number" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"/>
                            </div>
                            <div className="mt-4">
                                <label className="block text-lg font-medium text-gray-600">Password</label>
                                <input id="password" type="password" placeholder="Enter Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"/>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full px-4 py-2 text-white text-xl bg-gradient-to-b from-[#4A90E2] to-[#1A355E] rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Sign Up</button>
                            </div>
                        </form>

                        <p className="mt-6 text-lg text-center text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log In</a></p>
                        </div>
                    </div>

                    
                    <div className="flex-1 flex items-center justify-center text-white">
                        <h1 className="text-7xl font-bold text-center">Welcome to Our Hostel</h1>
                    </div>
                </div>
            </div>
        </div>
      
      </>
    
    );
  }