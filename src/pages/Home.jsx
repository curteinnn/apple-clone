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

export default function Home() {
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
      <section className="h-100 bg-white">
        <h1 className="iphone-title pl-25 pt-10 font-[Luxurious_Script] text-9xl font-light">
          iPhone
        </h1>

        <div className="flex gap-20 pl-20 pt-10">
          <ProductCard image={ip17pro} name="iPhone 17 Pro" />

          <ProductCard image={ipair} name="iPhone Air" />

          <ProductCard image={ip17} name="iPhone 17" />

          <ProductCard image={ip17e} name="iPhone 17e" />

          <ProductCard image={ip16} name="iPhone 16" />

          <ProductCard image={bandingkan} name="Bandingkan" />

          <ProductCard image={ios} name="iOS pratinjau" />
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-white to-gray-100" />

      <section className="h-200 bg-gray-100 p-10">
        <h1 className="p-10 text-center font-[Luxurious_Script] text-7xl font-light tracking-[0.08em]">
          Find Your iPhone
        </h1>

        <div className="h-screen">
          <Iphone3D />
        </div>
      </section>
      <div className="h-16 bg-gradient-to-b from-gray-100 to-white" />
    </main>
  );
}
