

import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

export default function Footer () {
    return (
        <div>
            <div className="lg:flex justify-between py-5 bg-[#332590] text-white">
                <div className="p-4 mb-4 lg:grid grid-cols-4 ">

                    <h1 className="mb-8 text-3xl font-bold">Logo</h1>
                    <div className="mb-8">
                        <h1 className="font-bold mb-5 text-lg">About Us</h1>
                        <ul className="space-y-2">
                            <li><a>Book Now</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>FAQs</a></li>
                            <li><a>Terms</a></li>
                            <li><a>Privacy</a></li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h1 className="font-bold mb-5 text-lg">Hostels</h1>
                        <ul className="space-y-2">
                            <li><a>Hostel One</a></li>
                            <li><a>Hostel Two</a></li>
                            <li><a>Hostel Three</a></li>
                            <li><a>Hostel Four</a></li>
                            <li><a>Hostel Five</a></li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h1 className="font-bold mb-5 text-lg">Services</h1>
                        <ul className="space-y-2">
                            <li><a>Services One</a></li>
                            <li><a>Services Two</a></li>
                            <li><a>Services Three</a></li>
                            <li><a>Services Four</a></li>
                            <li><a>Services Five</a></li>
                        </ul>
                    </div>
                </div>

                <div className="p-4">
                    <div className="mb-8 text-white">
                        <h1 className="font-bold mb-5 text-lg">Subscribe</h1>
                        <p className="mb-4">Stay up to date with our latest news and updates</p>
                        <div className="mb-4">
                            <input className="bg-inherit w-full border border-white focus:outline-none px-4 py-3 text-white text-xl" placeholder="Enter email here"></input>
                        </div>
                        <div className="mb-5">
                                <button className="w-full border bg-[#FAF9F6] text-xl text-[#332590] border-white px-4 py-3 font-semibold transform hover:scale-y-105 transition ease-in-out duration-300">Subscribe</button>

                        </div>
                        <p>By subscribing, you agree to our Privacy policy and consent to receive updates from our company.</p>
                    </div>
                </div>
            </div>

            <div className="h-20 lg:flex lg:content-center lg:text-center lg:justify-around items-center">

                <div className="flex gap-3 text-2xl lg:text-3xl lg:order-2 text-[#98159f]">
                    <a href="" className="hover:text-[#662269]"><TiSocialFacebookCircular /></a>
                    <a href="" className="hover:text-[#662269]"><SlSocialInstagram /></a>
                    <a href="" className="hover:text-[#662269]"><TiSocialTwitter /></a>
                    <a href="" className="hover:text-[#662269]"><TiSocialLinkedin /></a>
                    <a href="" className="hover:text-[#662269]"><TiSocialYoutube /></a>
                </div>

                <div className="lg:flex lg:gap-5 lg:order-1 text-[#98159f]">
                    <div className="lg:order-2">
                        <ul className="underline lg:flex lg:items-center lg:gap-5 lg:content-center">
                            <li><a href="" className="hover:text-[#662269]">Privacy Policy</a></li>
                            <li><a href="" className="hover:text-[#662269]">Terms of Service</a></li>
                            <li><a href="" className="hover:text-[#662269]">Cookie Settings</a></li>
                        </ul>
                    </div>
                    <div className="lg:order-1">
                        <p>&copy; {new Date().getFullYear()} HostelHub. All rights reserved. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}