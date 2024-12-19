import Image from "next/image";
import Img from "../../public/illutration/Site-Stats-pana.png"

export default function SecureBooking() {
  return (
    <section className="lg:flex lg:flex-row-reverse items-center gap-10 md:px-[4.5rem] pt-5 px-5 pb-5 text-[#000]">
      <div className="flex-[1]">
        {bookingDetails.map((info) => (
          <div key={info.id}>
          <h1 className="text-3xl font-semibold py-3 text-[#000]">{info.title}</h1>
          <p className="text-[16px]">{info.desc}</p>
        </div>
        ))}
      </div>

      <div className="flex-[1]">
        <Image src={Img} alt=""/>
      </div>
    </section>
  );
}

const bookingDetails = [
  {
    id: 1,
    title: "Secure Bookings",
    desc: " Easily book and reserve hostels with out secure online platform.",
  },
  {
    id: 2,
    title: "Wide Selection",
    desc: "Choose from a wide variety of hostels to the find the perfect accommodation for your needs.",
  },
  {
    id: 3,
    title: "Management Tools",
    desc: "Hostels Managers can easily keep track of students and efficiently manage their accommodations.",
  },
];
