import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mac3D from "../components/Mac3D";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    gsap.from(".mac-card", {
      duration: 2,
      ease: "power.outIn",
    });

    gsap.from(".title", {
      opacity: 0,
      duration: 1,
      delay: 1,
      x: 200,

      ease: "power3.out",
    });
  });
  return (
    <section className="realtive flex min-h-screen bg-white items-center justify-center">
      <div className="mac-card z-10 absolute h-[700px] w-full">
        <Mac3D />
      </div>

      <h1 className="title px-5 tracking-[0.05em] flex absolute inset-0 w-170 z-0 justify-center items-center text-9xl font-light">
        Macbook Pro M3
      </h1>
    </section>
  );
}
