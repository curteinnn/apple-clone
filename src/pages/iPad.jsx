import { useEffect } from "react";
import gsap from "gsap";

import Ipad3D from "../components/Ipad3D";

export default function iPhone() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-home",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 2,
        ease: "power3.inOut",
      },
    );
  }, []);

  return (
    <main className="">
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">
        <div className="animate-home absolute z-10 h-175 w-full">
          <Ipad3D />
        </div>

        <h1 className="font-light text-8xl absolute inset-0 z-0 flex items-center justify-center whitespace-nowrap text-center tracking-[0.2em]">
          Apple iPad Pro <br /> with apple pencil
        </h1>
      </section>
      <div className="h-16 bg-linear-to-b from-white to-gray-100"></div>
      <section className="flex h-200 gap-7 bg-gray-100 p-10">
        <div className="h-100 w-1/2 rounded-lg bg-white"></div>

        <div className="grid h-fit w-1/2 grid-cols-2 gap-5">
          <div className="h-47 rounded-lg bg-white"></div>
          <div className="h-47 rounded-lg bg-white"></div>
          <div className="h-47 rounded-lg bg-white"></div>
          <div className="h-47 rounded-lg bg-white"></div>
        </div>
      </section>
    </main>
  );
}
