/** @format */

import Image from "next/image";
import Welcome from "./welcome";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Footer/>
    </div>
  );
}
