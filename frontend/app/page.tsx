import Hero from '@/components/home-components/Hero';
import Navbar from '../components/home-components/Navbar'
import HeroImage from '@/components/home-components/HeroImage';
import HeroSimplified from '@/components/home-components/HeroSimplifiied';
import HeroSecure from '@/components/home-components/HeroSecure';
import HeroConvienience from '@/components/home-components/HeroConvienience';
// import HeroDiscover from '@/components/home-components/HeroDiscover';
import HeroConvienience2 from '@/components/home-components/HeroConvience2';
import Hero2 from '@/components/home-components/Hero2';
import Hero3 from '@/components/home-components/Hero3';
import Hero4 from '@/components/home-components/Hero4';
import Connect from '@/components/home-components/Connect';
import Footer from '@/components/home-components/Footer';


export default function Home() {
  return (
    <main className="bg-white900">
     <Navbar/>
     <Hero/>
     <HeroImage/>
     <HeroSimplified/>
     <HeroSecure/>
     <HeroConvienience/>
     {/* <HeroDiscover/> */}
     <HeroConvienience2/>
     <Hero2/>
     <Hero3/>
     <Hero4/>
     <Connect/>
     <Footer/>
    </main>
  );
}
