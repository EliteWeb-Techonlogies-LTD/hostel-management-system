import Image from "next/image"

export default function BlogArticle (){
  return(
    <section className="lg:grid lg:grid-cols-3 lg:gap-10">
      {blogs.map((blog) => (
        <div className=" mb-8" key={blog.id}>
        <div className="mb-4">
          <Image src={blog.img} alt="" width={1500} height={1500}/>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">{blog.header}</span>
          <h3 className="font-bold text-2xl">
           {blog.title}
          </h3>
          <p className="font-medium text-sm">
          {blog.description}
          </p>
          <div className="flex gap-5">
            <Image
              src={blog.profile}
              alt=""
              className="rounded-[100%] h-[50px] w-[50px]"
              width={50} height={50}
            />

            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{blog.name}</h3>
              <p>{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      

    </section>
  )
}

const blogs = [
  {
    id: 1,
    header: "Category",
    img: "/images/ano.webp",
    title: "10 Tips for Successful Blogging",
    description: "Learn how to create engaging content and grow your audience",
    profile: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
    name: "John Doe",
    date: "11 Feb 2022 . 7 min read"
  },
  {
    id: 2,
    header: "Category",
    img: "/images/ano.webp",
    title: " The Art of Travel Photography",
    description: "  Capture stunning moments with these experts tips",
    profile: "/images/profile-3.jpg",
    name: "Jane Smith",
    date: "11 Feb 2022 . 7 min read"
  },
  {
    id: 3,
    header: "Category",
    img: "/images/ano.webp",
    title: "Delicious Recipes for Every Occasion",
    description: " Explore a variety of mouthwatering dishes to satisfy your cravings.",
    profile: "/images/profile-1.jpg",
    name: "Emily Johnson",
    date: "11 Feb 2022 . 7 min read"
  },
  {
    id: 4,
    header: "Category",
    img: "/images/ano.webp",
    title: "10 Must-Have Fashion Accessories",
    description: " Stay stylish with these trendy accessories for every outfit.",
    profile: "/images/profile-4.jpg",
    name: "Sarah Thompson",
    date: "11 Feb 2022 . 7 min read"
  },
  {
    id: 5,
    header: "Category",
    img: "/images/ano.webp",
    title: "Tips for a Healthy Lifestyle",
    description: " Discover the secrets of living a balanced and fulfilling life",
    profile: "/images/profile-2.jpg",
    name: "Micheal Brown",
    date: "11 Feb 2022 . 7 min read"
  },
  {
    id: 6,
    header: "Category",
    img: "/images/ano.webp",
    title: "Exploring the Outdoors: Hiking Tips",
    description: "Embark on unforgettable hiking adventures with these essential",
    profile: "/images/b5f6905ca104bb7504095636fa73bd10.jpeg",
    name: "David Wilson",
    date: "11 Feb 2022 . 7 min read"
  },
]