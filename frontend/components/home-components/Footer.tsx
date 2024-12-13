

import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

export default function Footer () {
  return (
    <div>
    <div className="lg:flex justify-between  bg-gradient-to-r from-[#40c057] to-[#69db7c] py-5">
        <div className="p-4 mb-4 lg:grid grid-cols-4 text-black">

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
            <div className="mb-8 text-black">
                <h1 className="font-bold mb-5 text-lg">Subscribe</h1>
                <p className="mb-4">Stay up to date with our latest news and updates</p>
                <div className="mb-4">
                    <input className="bg-inherit w-full border border-[#FAF9F6] focus:outline-none px-4 py-3 text-white text-xl" placeholder="Enter email here"></input>
                </div>
                <div className="mb-5">
                        <button className="w-full border bg-[#FAF9F6] text-xl text-[#1A355E] border-[#1A355E] px-4 py-3 font-semibold transform hover:scale-y-105 transition ease-in-out duration-300">Subscribe</button>
                        <button className="w-full bg-[#FAF9F6] text-xl text-[#000] px-4 py-3 font-semibold transition duration-200">Subscribe</button>
                </div>
                <p>By subscribing, you agree to our Privacy policy and consent to receive updates from our company.</p>
            </div>
        </div>
    </div>

    <div className="h-20 lg:flex lg:content-center lg:text-center lg:justify-around items-center">

        <div className="flex gap-3 text-2xl lg:text-3xl lg:order-2 text-[#1A355E]">
            <a href=""><TiSocialFacebookCircular /></a>
            <a href=""><SlSocialInstagram /></a>
            <a href=""><TiSocialTwitter /></a>
            <a href=""><TiSocialLinkedin /></a>
            <a href=""><TiSocialYoutube /></a>
        </div>

        <div className="lg:flex lg:gap-5 lg:order-1 text-[#cda330]">
            <div className="lg:order-2">
                <ul className="underline lg:flex lg:items-center lg:gap-5 lg:content-center">
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookie Settings</a></li>
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