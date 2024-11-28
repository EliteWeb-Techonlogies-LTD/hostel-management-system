import GetInTouch from "./about-components/GetInTouch";
import Faq from "./home-components/Faq";

export default function FaqMainPage() {
  return (
    <section>
      <div>
        <div className="bg-slate-800 my-20 py-20 text-white lg:px-20 px-3">
          <small className="text-xl py-5">Discover</small>
          <h1 className="text-5xl lg:text-6xl font-semibold py-7">
           Frequently Asked Questions
          </h1>
          <p className="text-xl py-6">
           Find answers to common questions about our hotel booking service.
          </p>
          <div className="flex gap-5 lg:gap-10 py-10">
            <button className="border-[1px] border-black text-xl bg-black text-white py-3 px-6">
             Get Started
            </button>
            <button className="border-[1px] border-white text-xl py-3 px-6">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="px-2 lg:px-10 py-20">
        <h1 className="text-3xl font-bold py-5">Still have questions?</h1>
        <p className="text-lg py-3">Contact us for more information or assistance.</p>
        <button className="border-[1px] border-black px-5 py-2">Contact</button>
      </div>

      <div className="flex items-center justify-center w-full h-full text-center py-10 px-3">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold py-5">FAQs</h1>
        <p className="text-lg py-3">Find answers to commonly questions about our hostel booking service.</p>
        <Faq/>
        <p className="text-3xl lg:text-4xl py-5 font-bold">Still have questions?</p>
        <p className="text-lg">Contact us for further assistance.</p>
        <button className="border-[1px] border-black my-5 px-5 py-2 text-xl">Contact</button>
      </div>
    </div>

    <div className="flex items-center justify-center w-full h-full text-center py-10 px-1">
      <div>
        <h1 className="text-5xl font-semibold">FAQs</h1>
        <p className="text-lg lg:text-2xl text-wrap py-7 mx-auto lg:w-[850px]">Find answers to commonly asked questions about our hostel booking process, payments, refunds,hostel management, and students queries.</p>

        <div className="text-justify py-10 lg:w-[58%] mx-auto px-2">
          <h1 className="text-2xl font-semibold pt-10">How do I book a hostel?</h1>
          <p className="py-5 text-lg">To book a hostel, simply browse through the available options on our website, select your prefered hostel, and follow the booking instructions. If you have any issues, our customer support team is here to assist you.</p>
          <h1 className="text-2xl font-semibold pt-10">What is the refund policy?</h1>
          <p className="py-5 text-lg">Our refund policy varies depending on the hostel and the circumstances. Plese refer to the specific hostel&apos;s refund policy or contact </p>

          <h1 className="text-2xl font-semibold pt-10">How can I manage my hostel?</h1>
          <p className="py-5 text-lg">As a hostel manager, you can easily manage your hostel through our platform. Update availability, view bookings, and communicate with students all in one place.</p>

          <h1 className="text-2xl font-semibold pt-10">What if I have a problem with my booking?</h1>
          <p className="py-5 text-lg">If you encounter any problem with your bookings, please reach out to our customer support team. We will do our best to resolve the problem and ensure your stay is comfortable.</p>

          <h1 className="text-2xl font-semibold pt-10">Can i change my booking?</h1>
          <p className="py-5 text-lg">Yes, you can modify your booking depending on the availability of the hostel. Please contact our customer support team for assistance with changing your booking details.</p>
        </div>

        <h1 className="text-4xl font-semibold py-7">Still have questions?</h1>
        <p className="text-xl pb-7">Feel free to reach out to us.</p>
        <button className="border-[1px] border-black py-3 px-5 text-xl ">Contact</button>
      </div>
    </div>

    <div className="px-2 lg:px-10">
    <div className="flex items-center justify-center w-full h-full border-[1px] border-black ">
     <div className="text-center px-10">
     <h1 className="text-4xl font-bold py-5">Need Help Finding an Answer?</h1>
     <p className="pb-8">If you can&apos;t find the answer to your question, don&apos;t hesitate to cantact our support team.</p>
     <div className="pb-4 flex gap-10 items-center justify-center">
      <button className="border-[1px] border-black py-3 px-5 text-xl bg-black text-white">Contact</button>
      <button className="border-[1px] border-black py-3 px-5 text-xl">Support</button>
     </div>
     </div>
    </div>
    </div>

    <div className="px-2 lg:px-10 py-20">
      <div className="lg:px-12">
      <small className="text-xl font-bold">Get In Touch</small>
      <h1 className="text-4xl lg:text-6xl font-bold py-5">Contact us</h1>
      <p className="text-xl">Have a question? We&apos;re here to help!</p>
      </div>
      <GetInTouch/>
    </div>
    </section>
  );
}
