
import Profile1 from "../../public/images/b5f6905ca104bb7504095636fa73bd10.jpeg";
import Profile2 from "../../public/images/avatar.png";
import Profile3 from "../../public/images/profile-1.jpg";
import Profile4 from "../../public/images/profile-2.jpg";
import Profile5 from "../../public/images/profile-3.jpg";
import Profile6 from "../../public/images/profile-4.jpg";
import Image from "next/image";

export default function MeetOurTeam (){
  return (
    <div className="flex items-center justify-center w-full px-2 lg:px-10 py-20 text-center">
    <div>
      <small className="text-xl font-bold">Experienced</small>
      <h1 className="text-5xl font-semibold py-4">Our Team</h1>
      <p className="text-lg lg:text-xl">
        Meet Our talented hostel management team.
      </p>

      <div className="flex flex-col gap-10 py-10">
        <div className="flex flex-col lg:flex-row gap-10 py-10">
          <div className="flex-[1]">
            <Image
              src={Profile1}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">John Doe</h1>
            <p className="text-2xl pb-3">Manager</p>
            <p className="text-lg">
              John is responsible for overseeing all hostel operations and
              ensuring a comfortable stay for students.
            </p>
          </div>
          <div className="flex-[1]">
            <Image
              src={Profile2}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">Jane Smith</h1>
            <p className="text-2xl pb-3">Assistant Manager</p>
            <p className="text-lg">
             Jane supports the manager day-to-day tasks and assists with students inquiies and concerns.
            </p>
          </div>
          <div className="flex-[1]">
            <Image
              src={Profile3}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">Michael John</h1>
            <p className="text-2xl pb-3">Maintenance Supervisor</p>
            <p className="text-lg">
             Michael ensures that all hostel facilities are well-maintained and addresses any repair or maintenance issues.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pb-28">
        <div className="flex-[1]">
            <Image
              src={Profile4}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">Sarah Davis</h1>
            <p className="text-2xl pb-3">Front Desk Coordinator</p>
            <p className="text-lg">
              Sarah manages the front desk and assists students with check-in, check-out and general inquiries.
            </p>
          </div>
          <div className="flex-[1]">
            <Image
              src={Profile5}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">We are hiring!</h1>
            <p className="text-2xl pb-3">Manager</p>
            <p className="text-lg">
              Join our team and be part of our hostel community
            </p>
          </div>
          <div className="flex-[1]">
            <Image
              src={Profile6}
              alt=""
              className="rounded-full w-[100px] mx-auto object-cover"
            />
            <h1 className="text-2xl font-bold py-5">Full name</h1>
            <p className="text-2xl pb-3">Job Title</p>
            <p className="text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold">We are hiring!</h1>
      <p className="py-5 text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className="border-[1px] border-black px-5 py-3 text-xl">Open positions</button>
    </div>
  </div>
  )
}