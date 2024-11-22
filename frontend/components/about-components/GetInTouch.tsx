

export default function GetInTouch (){
  return(
     
    <section className="px-1 lg:px-12">
    <small className="font-bold text-lg">Book</small>
    <h1 className="font-bold text-4xl py-4">Get in Touch</h1>
    <p className="text-lg">Fill out the. form below to book your hostel</p>

    <form action="" className="py-10">
      <div className="flex gap-5 mb-4">
        <div>
          <label htmlFor="fname" className="text-lg text-left">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="border-[1.2px] block my-2 h-[50px] border-slate-700 w-[170px] px-2 lg:w-[340px]"
          />
        </div>
        <div>
          <label htmlFor="lname" className="text-lg">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="border-[1.2px] block my-2 h-[50px] border-slate-700 w-[170px] px-2 lg:w-[340px]"
          />
        </div>
      </div>
      <label htmlFor="email" className="text-lg">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-[1.2px] block my-2 h-[50px] border-slate-700 w-full px-2 lg:w-[700px]"
      />

      <label htmlFor="contact" className="text-lg">
        Phone Number
      </label>
      <input
        type="contact"
        name="contact"
        id="contact"
        className="border-[1.2px] block my-2 h-[50px] border-slate-700 w-full px-2 lg:w-[700px]"
      />
      <label htmlFor="topic" className="text-lg">
        Choose a Topic
      </label>
      <select
        name="topic"
        id="topic"
        className="border-[1.2px] block my-2 h-[50px] border-slate-700 w-full px-2 mb-10 lg:w-[700px]"
      >
        <option value="Select one...." disabled>
          Select one...
        </option>
        <option value="Select one....">Good</option>
        <option value="Select one....">Better</option>
        <option value="Select one....">Best</option>
      </select>

      <label htmlFor="check">Which Best Describe You?</label>
      <div className="flex flex-wrap gap-10 lg:gap-96 py-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">First Choice</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">Second Choice</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">Third Choice</label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">Fourth Choice</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">Fifth Choice</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" className="w-[20px]" />
            <label className="text-lg">Other</label>
          </div>
        </div>
      </div>

      <label htmlFor="message" className="text-lg">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Type Your Message.."
        className="border-[1.2px] block my-2 h-[180px] border-slate-700 w-full p-4 mb-10 lg:w-[700px]"
      ></textarea>
      <input type="checkbox" name="" className="w-[30px]" />
      <label htmlFor="" className="text-lg">
        {" "}
        I Accept the Terms
      </label>
    </form>
    <button className="bg-black text-white px-5 py-2 mb-5 text-lg">
      Submit
    </button>
  </section>


  )
}