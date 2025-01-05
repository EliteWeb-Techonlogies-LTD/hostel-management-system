"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Himage from "@/public/images/h-image.jpg";

const SlCarousel = dynamic(
    () => import ("@shoelace-style/shoelace/dist/react/carousel/index.js"),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    },
);

const SlCarouselItem = dynamic( 
    () => import("@shoelace-style/shoelace/dist/react/carousel-item/index.js"), 
    { loading: () => <p>Loading...</p>, 
      ssr: false, 
    } 
);

export default function Carousel() {
  return (
    <section className="mb-10 mt-[-20px]">
      <SlCarousel autoplay navigation loop pagination>
        <SlCarouselItem>
          <Image
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src={Himage}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <Image
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src={Himage}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <Image
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src={Himage}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <Image
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src={Himage}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <Image
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src={Himage}
          />
        </SlCarouselItem>
      </SlCarousel>
    </section>
  );
}
