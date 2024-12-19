
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export default function AboutTeam() {
  return (
    <section className="px-2 lg:px-14">
      <div className="flex flex-col gap-5 items-center justify-center py-20 text-center">
        <p className="text-sm font-bold">Seamless</p>
        <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>
        <p className="text-wrap w-full lg:w-[400px] mx-auto">
          Dedicated professionals committed to providing a seamless hostel
          booking experience.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {team.map((members) => (
          <div className="mb-10" key={members.id}>
          <Image src={members.img} width={50} height={50} className="rounded-full" alt="" />
          <p className="font-bold py-3">{members.name}</p>
          <p className="mb-2">{members.position}</p>
          <p>{members.description}</p>
          <div className="flex gap-3 mt-4 text-xl">
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <TbWorld />
            </Link>
          </div>
        </div>
        ))}
      </div>
      <div className=" flex items-center justify-center flex-col">
          <p className="text-2xl font-bold mb-3">We&apos;re Hiring</p>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300">
            Open Position
          </button>
        </div>
    </section>
  );
}

const team = [
  {
  id: 1,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "John Doe",
  position: "CTO",
  description: " Jane is a tech-savvy professional who ensures our platform is always up-to-date and user friendly."
},
{
  id: 2,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "Jane Smith",
  position: "CEO",
  description: "With over 10 years of experience in the hospitality industry, John leads our team with passion and expertise"
},
{
  id: 3,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "Micheal Johnson",
  position: "Marketing Manager",
  description: " Micheal&apos;s creative marketing strategies help us reach a wider audience and drive bookings."
},
{
  id: 4,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "Emily Davies",
  position: "Customer Support Specialist",
  description: "Emily is dedicated to providing exceptional customer support and ensuring smooth booking process for all customers."
},
{
  id: 5,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "We&apos;re hiring",
  position: "Job title",
  description: "Join our team and be part of the seamless hostel booking experience."
},
{
  id: 6,
  img: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
  name: "Full Name",
  position: "Job title",
  description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quidem itaque recusandae molestias ipsa dicta non error?"
},
];
