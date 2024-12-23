

export default function PriceCards (){
  return(
    <section className="block lg:flex items-center justify-center lg:px-10 py-5 gap-16">
    <div className="border-[1px] border-black py-2 px-3 w-[350px] h-[400px] rounded-sm mx-auto">
      <p className="text-xl font-semibold text-center">Basic Plan</p>
      <h1 className="text-4xl font-bold pt-3 pb-10">
        $19<sub className="text-xl">/mo</sub>
      </h1>
      <p className="text-justify">Feature-rich and user-friendly</p>
      <p className="text-justify py-4">24/7 customer support</p>
      <p className="text-justify">Secure online Transaction</p>
      <button className="mt-[7rem] py-3 bg-black text-white w-full">
        Get Started
      </button>
    </div>
    <div className="border-[1px] border-black py-2 px-3 w-[350px] h-[400px] my-5 rounded-sm mx-auto">
      <p className="text-xl font-semibold text-center">Business Plan</p>
      <h1 className="text-4xl font-bold pt-3 pb-10">
        $29<sub className="text-xl">/mo</sub>
      </h1>
      <p className="text-justify">Advanced analytics and reporting </p>
      <p className="text-justify py-4">Customizable branding options</p>
      <p className="text-justify">Integration with popular tools</p>
      <p className="text-justify pt-4">Priority customer support</p>
      <button className="mt-[4.5rem] py-3 bg-black text-white w-full">
        Get Started
      </button>
    </div>
    <div className="border-[1px] border-black py-2 px-3 w-[350px] h-[400px] rounded-sm mx-auto">
      <p className="text-xl font-semibold text-center">Enterprise Plan</p>
      <h1 className="text-4xl font-bold pt-3 pb-10">
        $49<sub className="text-xl">/mo</sub>
      </h1>
      <p className="text-justify">Dedicated account manager</p>
      <p className="text-justify py-4">Customizable API integration</p>
      <p className="text-justify">Advanced Security features</p>
      <p className="text-justify py-4">Customizable reporting options</p>
      <p className="text-justify">24/7 priority customer support</p>
      <button className="mt-[2rem] py-3 bg-black text-white w-full">
        Get Started
      </button>
    </div>
  </section>
  )
}