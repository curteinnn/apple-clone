import { useEffect } from "react";
import gsap from "gsap";
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
