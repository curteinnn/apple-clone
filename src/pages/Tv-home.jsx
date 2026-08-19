import { useEffect } from "react";
import gsap from "gsap";

import ProductCard from "../components/ProductCard";
import Iphone3D from "../components/Iphone3D";

export default function iPhone() {
  return (
    <main className="animate-home">
      <section className="flex h-screen bg-white gap-10 p-10">
        <div className=" bg-black h-100 w-50 justify-center items-center"></div>
        <div className=" bg-black h-100 w-50 justify-center items-center"></div>
        <div className="bg-black h-100 w-50 justify-center items-center"></div>
      </section>
    </main>
  );
}
