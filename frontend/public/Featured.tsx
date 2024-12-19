import Image from "next/image";

export default function Featured() {
  return (
    <section className="flex flex-col lg:flex-row px-2 lg:px-14 gap-10">
      {details.map((content) => (
        <div className=" mb-8" key={content.id}>
        <div className="mb-4">
        <Image src={content.img} alt="" width={1300} height={1500}/>
        </div>

        <div>
          <span className="font-semibold">{content.header}</span>
          <h3 className="font-bold text-xl mb-4 mt-3">
           {content.title}
          </h3>
          <p className="font-medium mb-5">{content.desc}</p>
          <div className="flex gap-5">
          <Image src={content.profileImg} alt="" className="rounded-full w-[50px] h-[50px]" width={500} height={500}/>

            <div className="flex flex-col gap-1">
              <h3>{content.author}</h3>
              <p>{content.date}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
}


const details = [
  {
    id: 1,
    img: "/images/ano.webp",
    header: "Services",
    title: "10 Tips for a Comfortable Stay",
    profileImg: "/images/profile-1.jpg",
    desc: "Learn how to make your hostel stay more enjoyable and convenient.",
    author: "John Doe",
    date: "11 Jan 2022 . 5 min read",
  },
  {
    id: 2,
    img: "/images/ano.webp",
    header: "Tips",
    title: " The Benefit of Communal Spaces",
    profileImg: "/images/profile-3.jpg",
    desc: "Discover how communal spaces in hostels can enhance your experience.",
    author: "Jane Smith",
    date: "11 Jan 2022 . 5 min read",
  },
  {
    id: 3,
    img: "/images/ano.webp",
    header: "Spaces",
    title: " The Importance of Room Cleaning Services",
    profileImg: "/images/profile-2.jpg",
    desc: " Learn why clean rooms are essential for a comfortable stay in hostels.",
    author: "David Johnson",
    date: "11 Jan 2022 . 5 min read",
  },
]
