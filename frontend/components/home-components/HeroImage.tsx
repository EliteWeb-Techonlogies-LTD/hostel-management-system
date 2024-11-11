import Image from "next/image";
import HeroImg from '../../public/images/ano.webp'

export default function HeroImage (){
  return (
    <section className="w-full lg:px-10 py-10 px-3">
      <Image src={HeroImg} width={1200} alt="heroImage" className="mx-auto"/>
    </section>
  );
}