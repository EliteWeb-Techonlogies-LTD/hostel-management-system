
import Main from '@/components/home-components/Main';
import Navbar from '../components/home-components/Navbar'
import Footer from '@/components/home-components/Footer';


export default function Home() {
  return (
    <main className="bg-white900">
     <Navbar/>
     <Main/>
     <Footer/>
    </main>
  );
}
