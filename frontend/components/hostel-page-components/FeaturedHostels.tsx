import Featured from "@/public/Featured";

export default function FeaturedHostels() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-20 text-center w-full">
        <span className="font-semibold text-lg">Features</span>
        <h2 className="font-bold text-2xl lg:text-3xl pb-5 pt-4">
          Discover Additional Hostel Services
        </h2>
        <p className="font-medium text-md">
          Find out more about the services offered by our hostels.
        </p>
      </div>
      <Featured/>
    </section>
  );
}
