import { useEffect } from "react";
import gsap from "gsap";

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
  }, []);

  return (
    <main className="animate-home">
      <section className="h-200 flex justify-center items-center bg-white">
        <h1 className="iphone-title pl-25 pt-10 font-[Luxurious_Script] text-9xl font-light">
          welcome to Apple site
        </h1>
      </section>

      <div className="h-20 bg-gradient-to-b from-white to-gray-100" />

      <section className="h-200 bg-gray-100">
        <video
          className=" w-fullh-full object-cover"
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
