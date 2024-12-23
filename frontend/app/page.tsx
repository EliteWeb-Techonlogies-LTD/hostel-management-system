
import Footer from '@/components/home-components/Footer';
import Hero from '@/components/home-components/Hero';
import Main from '@/components/home-components/Main';
import Navbar from '@/components/home-components/Navbar';
import SecureBooking from '@/components/home-components/SecureBooking';
import Simply from '@/components/home-components/Simply';
import Cards from '@/public/Cards';


export default function Home() {
  return (
    <main className="bg-white900">
      <Navbar/>
      <Hero/>
      <Simply/>
      <SecureBooking/>
      <Cards/>
      <Main/>
     <Footer/>
    </main>
  );
}
