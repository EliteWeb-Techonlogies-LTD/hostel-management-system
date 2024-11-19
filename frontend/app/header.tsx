import { FiAlignJustify } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const header = () => {
    return (  
    <header className='flex justify-between  my-4 border-b-2 border-black p-4 items-center mb-20'>
        <div className='flex items-center'>
            <div>
                <a><h1 className='text-2xl font-black cursor-pointer'>LOGO</h1></a>
            </div>
            <nav className='ml-4 text-lg'>
                <ul className='hidden md:flex gap-8 flex-row'>
                    <li><a href="#">Explore Hostels</a></li>
                    <li><a href="#">Book Now</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">More Options</a></li>
                    
                </ul>
            </nav>
        </div>
        <div className='hidden md:flex justify-between gap-8 items-center'>
            <a><button className='border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300'>Sign Up</button></a>
            <a><button className='bg-black text-white border-black px-4 py-2 hover:bg-inherit hover:border-black hover:border-2 hover:text-black transition ease-in-out duration-300'>Log In</button></a>
        </div>
        <div className="md:hidden">
            <button className="text-3xl"><FiAlignJustify /></button>
        </div>
    </header>
    );
}
export default header;