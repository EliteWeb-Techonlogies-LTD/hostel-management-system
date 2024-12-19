
import "../../public/css/style.css"

export default function AboutHero (){
  return(
    <section className="flex flex-col gap-5 items-center justify-center h-[85vh] AboutHero">
      <h1 className="text-5xl font-bold mb-3 text-center text-white">Welcome To Hostel Book</h1>
        <p className="w-full text-wrap text-center lg:w-[350px] text-gray-300">
          Discover and book the perfect hostel near your university with ease.
        </p>
    </section>
  )
}