import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SlPaperClip } from "react-icons/sl";
import { IoStarSharp } from "react-icons/io5";
import { FaWebflow } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";

export default function BlogPage(){
    return(
        <div>
        <div className="p-5">

            {/*Hero section */}
            <div className="flex items-center gap-3 mb-5">
                <span><IoIosArrowBack /></span>
                <p>Latest Posts</p>
            </div>
            <div className="flex items-center gap-4 font-bold">
                <button className="bg-gray-400 p-2">Category</button>
                <p>5 minutes read</p>
            </div>
            <p className="font-bold text-3xl mb-10">Discover the Best Hostel Around Campus</p>
            <img src="./p 1.jpg"/>
            <div className="lg:flex lg:justify-between mt-10">
                <div className="flex gap-10">
                    <div>
                        <p>Written by</p>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <p>Published on</p>
                        <p>22nd January 2021</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-5">
                    <a href=""><SlPaperClip /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaFacebook /></a>
                </div>
            </div>


            {/*Headings section */}
            <div className="mt-32 lg:w-1/2">
                <div>
                    <p className="font-bold text-3xl mb-5">Heading 2</p>
                    <p className="font-bold mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? Deserunt adipisci voluptas voluptatem facere quasi deleniti repellat corporis totam iure hic?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? Deserunt adipisci voluptas voluptatem facere quasi deleniti repellat corporis totam iure hic?</p>
                </div>
                <div className="mt-7">
                    <p className="font-bold text-2xl mb-5">Heading 3</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? Deserunt adipisci voluptas voluptatem facere quasi deleniti repellat corporis totam iure hic?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? Deserunt adipisci voluptas voluptatem facere quasi deleniti repellat corporis totam iure hic?</p>
                </div>
                <div className="mt-7">
                    <p className="font-bold text-xl mb-5">Heading 4</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? Deserunt adipisci voluptas voluptatem facere quasi deleniti repellat corporis totam iure hic?</p>
                </div>
                <div>
                    <img src="./p 1.jpg"/>
                    <div className="border-l-2 border-black pl-2 mt-5 text-sm">
                        <p>Image caption goes here</p>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="font-bold text-xl mb-5">Heading 5</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? </p>
                </div>
                <div className="border-l-2 border-black pl-2 mt-5 italic">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio quam consequuntur fuga, amet rem veritatis iure nisi nesciunt natus libero. Nam explicabo ad laboriosam itaque esse numquam odit."</p>
                    </div>
                <div className="mt-7">
                    <p className="font-bold text-xl mb-5">Heading 6</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, omnis debitis exercitationem quis at unde rerum nostrum? </p>
                </div>
            </div>

            {/*Satisfied Customers */}
            <div className="mt-48">
                <div>
                    <p className="font-bold text-3xl">Satisfied Customers</p>
                    <p className="text-sm mt-5">Read what our ustomers have to say about us</p>
                </div>
                {/*Stars Section */}
                <div className="lg:grid lg:grid-cols-2 gap-10">
                    {/*Stars 1 */}
                    <div>
                        <div className="mb-3 mt-10">
                            <div className="flex gap-1 text-xl mb-3">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                            <p className="font-bold text-lg">Our experince with the hostel booking service was fantastic. The process was seamless and the staff was extremely helpful.</p>
                        </div>
                        <div className="lg:flex lg:gap-10">
                            <div className="mb-5 lg:flex lg:gap-5">
                                <img src="./male.jpg" alt="" className="w-10 rounded-full"/>
                                <div className="mt-3">
                                    <p className="font-bold">John Doe</p>
                                    <p>Hostel Manager, ABC Hostel</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:border-l-2 border-black lg:p-5">
                                <span className="text-4xl"><FaWebflow/></span>
                                <p className="font-bold text-2xl">Webflow</p>
                            </div>
                        </div>
                    </div>

                    {/*Stars 2 */}
                    <div>
                        <div className="mb-3 mt-10">
                            <div className="flex gap-1 text-xl mb-3">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                            <p className="font-bold text-lg">I highly recommend the hostel booking service. It made finding and reserving a hostel room hassle-free.</p>
                        </div>
                        <div className="lg:flex lg:gap-10">
                            <div className="mb-5 lg:flex lg:gap-5">
                                <img src="./female.jpg" alt="" className="w-10 rounded-full"/>
                                <div className="mt-3">
                                    <p className="font-bold">Jane Smith</p>
                                    <p>Student, XYZ University</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:border-l-2 border-black lg:p-5">
                                <span className="text-4xl"><FaWebflow/></span>
                                <p className="font-bold text-2xl">Webflow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*Find Your Perfect Hostel */}
            <div className="mt-48">
                <div className="border-2 border-black lg:flex">
                    <div className="lg:flex justify-center items-center">
                        <div className="p-5">
                            <p className="font-bold text-4xl mb-3">Find Your Perfect Hostel</p>
                            <p>Browse our selection of comfortable and affordable hoetel near your university.</p>
                            <div className="flex mb-6 gap-4 items-center mt-3">
                                <button className="bg-black py-2 px-4 text-white hover:border-2 hover:border-black hover:text-black hover:bg-inherit transition ease-in-out duration-300">Book</button>
                                <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./p 1.jpg"/>
                    </div>
                </div>
            </div>

            {/*Medium length Heading */}   
            <div className="mt-32">
                <div className="border-2 border-black p-5 text-center lg:p-10">
                    <p className="font-bold text-3xl mb-3">Medium length heading goes here</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit dolores dicta error.</p>
                    <div className="lg:flex justify-center items-center">
                        <div className="mt-3 lg:flex lg:gap-3 lg:justify-center items-center">
                            <input className="bg-inherit border border-black px-4 py-3 text-black mb-3" placeholder="Enter email here"></input>
                            <button className="bg-black text-white p-2 hover:border-2 hover:border-black hover:bg-inherit hover:text-black">Sign Up</button>
                        </div>
                    </div>
                    <p className="text-sm mt-3">By clicking Sign Up you're confirming that you agree with our <a href="" className="underline">Terms and Condition</a></p>
                </div>
            </div> 

            {/*FAQs */}    
            <section className="p-4 mt-20 lg:w-3/5 lg:mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="mb-10">
                    Find answers to common questions about hostel and bookings.
                    </p>
                </div>
                <div className="font-bold space-y-4 mb-10 cursor-pointer">
                    <div>
                    <p className="border-t-2 border-b-2  border-black p-4 flex justify-between">
                        How do I book a hostel?
                        <span className="text-2xl">
                        <IoIosArrowDown />
                        </span>
                    </p>
                    </div>
                    <div>
                    <p className="border-t-2 border-b-2  border-black p-4 flex justify-between">
                        What amenities do hostels offer?
                        <span className="text-2xl">
                        <IoIosArrowDown />
                        </span>
                    </p>
                    </div>
                    <div>
                    <p className="border-t-2 border-b-2  border-black p-4 flex justify-between">
                        Are hostels safe?
                        <span className="text-2xl">
                        <IoIosArrowDown />
                        </span>
                    </p>
                    </div>
                    <div>
                    <p className="border-t-2 border-b-2  border-black p-4 flex justify-between">
                        Can I cancel my booking?
                        <span className="text-2xl">
                        <IoIosArrowDown />
                        </span>
                    </p>
                    </div>
                    <div>
                    <p className="border-t-2 border-b-2 border-black p-4 flex justify-between">
                        How do I check-in?
                        <span className="text-2xl">
                        <IoIosArrowDown />
                        </span>
                    </p>
                    </div>
                </div>

                <div className="mb-20 text-center">
                    <p className="text-2xl font-bold mb-5">Still have questions?</p>
                    <p className="mb-10">Contact us for more info</p>
                    <a className="border-2 border-black py-5 px-7 hover:bg-black hover:text-white cursor-pointer">
                    Contact
                    </a>
                </div>
            </section>


            {/*Discover New Travel Destination */}   
            <div className="mt-20">
                <div className="mb-10">
                    <div className="text-center">
                        <p className="text-sm font-semibold mb-3">Travel</p>
                        <p className="font-bold text-3xl mb-3">Discover New Travel Destination</p>
                        <p>Explore our Collection of travel blog posts</p>
                    </div>
                </div>
                {/*Image div */} 
                <div className="grid gap-10 lg:grid-cols-3">
                    <div>
                        <img src="./p 1.jpg"/>
                        <div className="flex items-center gap-4 font-bold text-sm mt-3">
                            <button className="bg-gray-300 p-2">Adventure</button>
                            <p>3 min read</p>
                        </div>
                        <p className="font-bold">Hiking in the Swiss Alps</p>
                        <p>Experience the breathtaking beauty of the swiss alps</p>
                        <button className="flex items-center gap-3 transition ease-in-out duration-300 mt-5">Read more <SlArrowRight /></button>
                    </div>
                    <div>
                        <img src="./p 1.jpg"/>
                        <div className="flex items-center gap-4 font-bold text-sm mt-3">
                            <button className="bg-gray-300 p-2">Food</button>
                            <p>5 min read</p>
                        </div>
                        <p className="font-bold">Exploring local cuisine</p>
                        <p>Discover the flavors of local cuisine during your travels</p>
                        <button className="flex items-center gap-3 transition ease-in-out duration-300 mt-5">Read more <SlArrowRight /></button>
                    </div>
                    <div>
                        <img src="./p 1.jpg"/>
                        <div className="flex items-center gap-4 font-bold text-sm mt-3">
                            <button className="bg-gray-300 p-2">Culture</button>
                            <p>4 min read</p>
                        </div>
                        <p className="font-bold">Immersing in local tradition</p>
                        <p>Learn about the rich cultural traditions of differnet countries</p>
                        <button className="flex items-center gap-3 transition ease-in-out duration-300 mt-5">Read more <SlArrowRight /></button>
                    </div>
                </div>
                <div className="mt-7 text-center">
                    <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition ease-in-out duration-300">View all</button> 
                </div>
            </div>   
        </div>
    </div>
    );
}