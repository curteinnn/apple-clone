import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductCard from "../components/ProductCard";
import Iphone3D from "../components/Iphone3D";

import ip17pro from "../assets/ip17pro.png";
import ipair from "../assets/ipair.png";
import ip17 from "../assets/ip17.png";
import ip17e from "../assets/ip17e.png";
import ip16 from "../assets/ip16.png";
import bandingkan from "../assets/bandingkan.png";
import ios from "../assets/ios.png";
import iklan from "../assets/iklan.mp4";

import ipcard1 from "../assets/ipcard1.jpg";
import ipcard2 from "../assets/ipcard2.jpg";
import ipcard3 from "../assets/ipcard3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function iPhone() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-home",
      {
        y: 200,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".iphone-3d",
      {
        y: -2000,
      },
      {
        y: 0,
        duration: 1.5,
        delay: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".iphone-section",
          start: "top 70%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      ".iphone-card",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".iphone-card-section",
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <main className="animate-home">
      <section className="h-100 bg-white">
        <h1 className="iphone-title pl-25 pt-10 text-8xl ">iPhone</h1>

        <div className="flex gap-20 pl-20 pt-10">
          <ProductCard image={ip17pro} name="iPhone 17 Pro" />

          <ProductCard image={ipair} name="iPhone Air" />

          <ProductCard image={ip17} name="iPhone 17" />

          <ProductCard image={ip17e} name="iPhone 17e" />

          <ProductCard image={ip16} name="iPhone 16" />

          <ProductCard image={bandingkan} name="Compare" />

          <ProductCard image={ios} name="iOS preview" />
        </div>
      </section>
      <div className="h-20 bg-gradient-to-b from-white to-gray-100" />
      {/* SECTION 3D */}
      <section className="relative h-200 bg-gray-100">
        <h1 className="absolute inset-0 mx-auto w-fit flex items-center justify-center z-0 text-9xl tracking-[0.08em]">
          iPhone 17 Pro Max
        </h1>

        <div className="relative flex h-full items-center justify-center">
          <div className="iphone-3d absolute inset-0 z-10">
            <Iphone3D />
          </div>
        </div>
      </section>
      <div className="h-16 bg-gradient-to-b from-gray-100 to-white" />
      {/* SECTION CARD */}
      <section className="iphone-card-section flex h-300 flex-col justify-center gap-10 pt-10">
        <div className="flex justify-center gap-10">
          <div className="iphone-card  h-140 w-100 bg-gray-100 rounded-lg">
            <img src={ipcard1} alt="" className="h-100 w-full rounded-lg" />
            <h1 className="px-5 pt-3 text-xl font-semibold ">iPhone 17 Pro</h1>
            <p className="px-5 pt-1 text-gray-500 ">manteppp. anjay</p>
            <button className="ml-5 mt-3 rounded-full bg-black px-5 py-2 text-sm text-white">
              Buy Now
            </button>
          </div>
          <div className="iphone-card h-140 w-100 bg-gray-100 rounded-lg">
            <img src={ipcard2} alt="" className="h-100 w-full rounded-lg" />
            <h1 className="px-5 pt-3 text-xl font-semibold ">iPhone Air</h1>
            <p className="px-5 pt-1 text-gray-500 ">manteppp. anjay</p>
            <button className="ml-5 mt-3 rounded-full bg-black px-5 py-2 text-sm text-white">
              Buy Now
            </button>
          </div>
          <div className="iphone-card h-140 w-100 bg-gray-100 rounded-lg">
            <img src={ipcard3} alt="" className="h-100 w-full rounded-lg " />
            <h1 className="px-5 pt-3 text-xl font-semibold">iPhone 17</h1>
            <p className="px-5 pt-1 text-sm text-gray-500">
              Pro. Powerful. Titanium.
            </p>
            <button className="ml-5 mt-3 rounded-full bg-black px-5 py-2 text-sm text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg mt-10">
          <h2 className=" text-center py-10 px-10 tracking-[1em]">
            Think Different
          </h2>
        </div>
      </section>
      {/* SECTION IKLAN */}
      <section className="h-200 bg-white">
        <video
          className=" w-full h-full object-cover"
          src={iklan}
          autoPlay
          muted
          loop
          playsInline
        />
      </section>
      <div className="h-16 bg-gradient-to-b from-white to-gray-100" />
    </main>
  );
}
