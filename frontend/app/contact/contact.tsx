




export default function contactUs() {

    const arrow = ">";

    return (
        <> 

{/* className="ml-3" */}

<main className="mx-4">


    {/* Welcome to Our Hostel */}

<section className="mb-5 mt-5">
    <div className="text-left">
        <div className="font-bold text-3xl py-4">Find Your Perfect Hostel Near the University</div>
        <div className="font-medium pb-4">Welcome to our hostel website! Discover and book the ideal accommodation for your university life.</div>

        <button className="bg-black text-white py-2 px-4 mr-4 mb-5">Search</button>
        <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7">Learn More</button>
    </div>

    <img src="https://via.placeholder.com/300x250" alt="" className="min-h-36 object-cover" />
</section>










{/* Find your Ideal Hostel */}

<section className="text-center p-5 pt-12 mb-4">
    <span className="font-semibold">Hostels</span>
    <h2 className="font-bold text-3xl my-3">Find Your Ideal Hostel</h2>
    <p className="font-medium">Discover the Best Hostels for Students</p>
</section>











{/* Hostels     */}

<section className="mb-4">

    <div className="mb-4">

            <div>
              <img src="https://via.placeholder.com/500x500" alt="" />
            <h3 className="mt-4 font-bold mb-2 text-lg">Hostel Name Here</h3>
            <p className="font-medium mb-4">Discover a Variety of Hostels for Every Budget and Preference</p>

            <div className="flex gap-2 mb-5">
                <button className="bg-gray-200 font-semibold px-3 py-2">Affordable</button>
                <button className="bg-gray-200 font-semibold px-3 py-2">Convenient</button>
                <button className="bg-gray-200 font-semibold px-3 py-2">Safe</button>
            </div>

            <span className="p-3 mb-4 font-semibold">View Hostel &nbsp;&nbsp; {arrow}</span>
        </div>

        <div>
            <img src="https://via.placeholder.com/500x500" alt="" />
            <h3 className="mt-4 font-bold mb-2 text-lg">Hostel Name Here</h3>
            <p className="font-medium mb-4">Explore the Hostel&apos;s Amenities and Features</p>

            <div className="flex gap-2 mb-5">
                <button className="bg-gray-200 font-semibold px-3 py-2">Affordable</button>
                <button className="bg-gray-200 font-semibold px-3 py-2">Convenient</button>
                <button className="bg-gray-200 font-semibold px-3 py-2">Safe</button>
            </div>

            <span className="p-3 mb-4 font-semibold">View Hostel &nbsp;&nbsp; {arrow}</span>
        </div>

    </div>

    <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 ml-24 mt-4">View All</button>

</section>










{/* Hostel Of The Week */}

<section>
    <div>
        <img src="https://via.placeholder.com/500x800" alt="" className="d-sm-none" />
    </div>

    <div className="mt-3">
        <span className="font-semibold mb-3">Discover</span>
        <h2 className="font-bold text-3xl mb-5 mt-3">Hostel of the Week: Unforgettable Stays</h2>
        <p>
            Experience the best hostel stays with our &rdquo;Hostel of the Week&ldquo; feature.
            Each week, we showcase a unique and exceptional hostel that offers Unforgettable experience for students. From stunning locations to top-notch amenities, these hostels are hand-picked to to ensure an amazing stay for you.
        </p>

        <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 mr-5 mt-6 font-semibold">Learn More</button>
        <span className="p-3 mb-7 mt-6 font-semibold">Book Now &nbsp;&nbsp; {arrow}</span>
    </div>

</section>








{/* *********Payment Options will come here */}

<section className="mt-6 mb-6 text-center">
    <span className="font-semibold">Affordable</span>
    <h2 className="font-bold text-3xl mb-5 mt-4">Pricing Options</h2>
    <p className="font-medium mb-5">Choose from a range of price plans to suit your budget</p>
    <button className="bg-black text-white py-2 px-4 mb-5 border border-solid border-black">Monthly</button>
    <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-5">Yearly</button>
</section>

<section className="flex flex-col gap-5 mb-24">


    {/* Basic Plan */}

    <div className="border border-solid border-black py-7 px-4">
        {/* Cube image */}
        <span className="font-semibold">Basic Plan</span>
        <h2 className="font-bold text-3xl mb-5 mt-1">$19<span className="font-semibold text-base">/mo</span></h2>
        <hr className="border-black opacity-50 border" />

        <div className="my-6">
            <p className="my-3">Includes:</p>
            <p className="my-4">✔️ <span className="">24/7 Customer Support</span></p>
            <p className="mb-4">✔️ <span className="">Free Wi-Fi</span></p>
            <p className="mb-4">✔️ <span className="">Laundry Facilities</span></p>
        </div>

        <button className="bg-black text-white text-center w-full py-3 mt-3">Get Started</button>
    </div>



    {/* Business plan */}

    <div className="border border-solid border-black py-7 px-4">
        {/* Cube image */}
        <span className="font-semibold">Business Plan</span>
        <h2 className="font-bold text-3xl mb-5 mt-1">$29<span className="font-semibold text-base">/mo</span></h2>
        <hr className="border-black opacity-50 border" />

        <div className="my-6">
            <p className="my-3">Includes:</p>
            <p className="my-4">✔️ <span className="">All Basic Plan Features</span></p>
            <p className="mb-4">✔️ <span className="">Gym Access</span></p>
            <p className="mb-4">✔️ <span className="">Daily HouseKeeping</span></p>
            <p className="mb-4">✔️ <span className="">Breakfast Included</span></p>
        </div>

        <button className="bg-black text-white text-center w-full py-3 mt-3">Get Started</button>
    </div>





    {/* Enterprise Plan */}

    <div className="border border-solid border-black py-7 px-4">
        {/* Cube image */}
        <span className="font-semibold">Enterprise Plan</span>
        <h2 className="font-bold text-3xl mb-5 mt-1">$49<span className="font-semibold text-base">/mo</span></h2>
        <hr className="border-black opacity-50 border" />

        <div className="my-6">
            <p className="my-3">Includes:</p>
            <p className="my-4">✔️ <span className="">All Business Plan Features</span></p>
            <p className="mb-4">✔️ <span className="">Conference Room Access</span></p>
            <p className="mb-4">✔️ <span className="">Airport Shuttle Service</span></p>
            <p className="mb-4">✔️ <span className="">Room Service</span></p>
            <p className="mb-4">✔️ <span className="">Premium Amenities</span></p>
        </div>

        <button className="bg-black text-white text-center w-full py-3 mt-3">Get Started</button>
    </div>

</section>











{/* Discover Additional Hostel Services */}

<section className="mt-4 mb-8">
    <span className="font-semibold">Features</span>
    <h2 className="font-bold text-3xl mb-5 mt-4">Discover Additional Hostel Services</h2>
    <p className="font-medium">Find out more about the services offered by our hostels.</p>
</section>

<section className="mb-6">
    <div>
        {/* Service 1 */}
        <div className="mt-3 mb-8">
            <div className="mb-4">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>

            <div>
                <span className="font-semibold">Services</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">10 Tips for a Comfortable Stay</h3>
                <p className="font-medium mb-5">Learn how to make your hostel stay more enjoyable and convenient.</p>
                <div className="flex gap-5">
                    <img src="https://via.placeholder.com/200x200" alt="" className="rounded-full" />
                    
                    <div className="flex flex-col gap-1">
                        <h3>John Doe</h3>
                        <p>11 Jan 2022 . 5 min read</p>
                    </div>

                </div>
            </div>

        </div>

        {/* Service 2 */}

        <div className="mb-8">
            <div className="mb-4">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>

            <div>
                <span className="font-semibold">Tips</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">The Benefit of Communal Spaces</h3>
                <p className="font-medium mb-5">Discover how communal spaces in hostels can enhance your experience.</p>
                <div className="flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full" />
                    
                    <div className="flex flex-col gap-1">
                        <h3>Jane Smith</h3>
                        <p>11 Jan 2022 . 5 min read</p>
                    </div>

                </div>
            </div>

        </div>


        {/* Service 3 */}
        <div className="mb-8">
            <div className="mb-4">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>

            <div>
                <span className="font-semibold">Spaces</span>
                <h3 className="font-bold text-2xl mb-4 mt-3">The Importance of Room Cleaning Services</h3>
                <p className="font-medium mb-5">Learn why clean rooms are essential for a comfortable stay in hostels.</p>
                <div className="flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full" />
                    
                    <div className="flex flex-col gap-1">
                        <h3>David Johnson</h3>
                        <p>11 Jan 2022 . 5 min read</p>
                    </div>

                </div>
            </div>

        </div>

    </div>

    <button className="bg-white text-black py-2 px-5 border border-solid border-black mb-7 ml-48">View All</button>
</section>






{/* Contact Us */}

<section className="mb-5">
    <span className="font-semibold">Discover</span>
    <h2 className="font-bold text-2xl mb-4 mt-3">Contact Us</h2>
    <p className="font-medium mb-5">Find the perfect hostel near your university campus.</p>
</section>

<section className="mb-6">
    <div className="flex flex-col gap-4 mb-4">
        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-bold my-2">Email</h3>
            <p className="mb-3">Send us an email</p>
            <a href="http://" target="_blank" className="text-decoration-underline"><u>hello@hostelwebsite.com</u></a>
        </div>

        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-bold my-2">Phone</h3>
            <p className="mb-3">Call us for assistance</p>
            <a href="http://" target="_blank" className="text-decoration-underline"><u>+1 (555) 123-4567</u></a>
        </div>

        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-bold my-3">Office</h3>
            <p className="mb-4">123 Main St, Anytown, USA</p>
            <a href="http://" target="_blank" className="text-decoration-none p-3"> Get Directions &nbsp;&nbsp; {arrow}</a>
        </div>
    </div>

    <div className="mt-5">
        <img src="via.placeholder.com/800x500" alt="" />
    </div>

</section>












{/* Find Your Perfect Hostel  */}


<section className="bg-gray-700 py-12 pl-4 mr-4">
    <h2 className="text-white text-3xl font-bold mb-4">Find Your Perfect Hostel</h2>
    <p className="font-medium text-white mb-4">Browse through a wide selection of hostels near the university campus</p>
    <button className="bg-black text-white py-2 px-4 mr-4">Book</button>
    <button className="bg-none text-white py-2 px-5 border border-solid border-white">Learn More</button>
</section>















{/* FAQ */}



















{/* 5 stars */}

<section className="flex flex-col gap-4 items-center justify-center text-center my-16">

    {/* 5Stars goes Here */}
    <p className="font-bold text-xl">Staying in one of the hostels listed on this website was a great experience. The facilities were clean and comfortable, and the staff was friendly and helpful.</p>
    <img src="https://via.placeholder.com/200x200" alt="" />
    <p><span className="block font-bold">John Doe</span>Student, ABC University</p>
    {/* Webflow image goes here */}

</section>
























{/* Meet our Team */}





























{/* COntact Us 2 */}


<section className="my-8">
<div className="flex flex-col gap-4 mb-4 text-center">
        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-extrabold my-4">Email</h3>
            <p className="mb-3">If you have any question or need assistance with booking a hostel, Please feel free to reach out to us </p>
            <a href="http://" target="_blank"><u>hello@relume.io</u></a>
        </div>

        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-extrabold my-4">Phone</h3>
            <p className="mb-3">You contact us via phone during our business hours.</p>
            <u>+1 (555) 123-4567</u>
        </div>

        <div>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <h3 className="font-extrabold my-4">Office</h3>
            <p className="mb-4">Visit our office for any in-person inquiries or assistance</p>
            <u> 123 Main St, Anytown, USA </u>
        </div>
    </div>
</section>


















{/* Footer */}



    
</main>


</>

    );

}