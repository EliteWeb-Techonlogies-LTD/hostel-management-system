import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

export default function ContactUSHostel() {
  return (
    <section className="px-2 lg:px-14">
      <div className="flex flex-col text-center items-center justify-center py-20">
        <span className="font-semibold">Discover</span>
        <h2 className="font-bold text-2xl mb-4 mt-3">Contact Us</h2>
        <p className="font-medium mb-5">
          Find the perfect hostel near your university campus.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="flex flex-col gap-4 mb-4 lg:w-2/5">
          <div>
            <MdOutlineMailOutline />
            <h3 className="font-bold my-2">Email</h3>
            <p className="mb-3">Send us an email</p>
            <a
              href="http://"
              target="_blank"
              className="text-decoration-underline"
            >
              <u>hello@hostelwebsite.com</u>
            </a>
          </div>

          <div>
            <LuPhone />
            <h3 className="font-bold my-2">Phone</h3>
            <p className="mb-3">Call us for assistance</p>
            <a
              href="http://"
              target="_blank"
              className="text-decoration-underline"
            >
              <u>+1 (555) 123-4567</u>
            </a>
          </div>

          <div>
            <SlLocationPin />
            <h3 className="font-bold my-3">Office</h3>
            <p className="mb-4">123 Main St, Anytown, USA</p>
            <a
              href="http://"
              target="_blank"
              className="text-decoration-none p-3 hover:bg-black hover:text-white hover:border-black hover:border cursor-pointer"
            >
              {" "}
              Get Directions &nbsp;&nbsp;
            </a>
          </div>
        </div>

        <div className="mt-5 lg:w-3/5">
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.872823922229!2d-122.41941658432925!3d37.77492977975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f56ed%3A0x5e16c2c1c5a7f5a2!2s123%20Main%20St%2C%20Anytown%2C%20USA!5e0!3m2!1sen!2sin!4v1642011382236!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
          ></iframe>

       
          </div>
      </div>
    </section>
  );
}
