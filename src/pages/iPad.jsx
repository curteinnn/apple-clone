import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Ipad3D from "../components/Ipad3D";

gsap.registerPlugin(ScrollTrigger);

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
    gsap.fromTo(
      ".ipad-card",
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
          trigger: ".ipad-section",
          start: "top 80%",
          once: true,
        },
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
      <section className="ipad-section flex h-200 gap-7 bg-gray-100 p-10">
        <div className="ipad-card h-100 w-1/2 rounded-lg bg-white"></div>

        <div className=" grid h-fit w-1/2 grid-cols-2 gap-5">
          <div className="ipad-card h-47 rounded-lg bg-white">
            <h1 className="text-center">kasdakudgaudga</h1>
          </div>
          <div className="ipad-card h-47 rounded-lg bg-white">
            <h1 className="text-center">fafdafa</h1>
          </div>
          <div className="ipad-card h-47 rounded-lg bg-white">
            <h1 className="text-center">daaddD</h1>
          </div>
          <div className="ipad-card relative h-47 rounded-lg bg-white">
            <h1 className="text-center">aduhaoua</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
