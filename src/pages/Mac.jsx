import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    gsap.from(".mac-card", {
      x: 200,
      delay: 1,
      duration: 5,
      rotate: 360,
    });
  });
  return (
    <section className="mac-card p-5 h-200 flex items-center justify-center gap-5 bg-white">
      <div className="bg-black w-80 h-100"></div>
      <div className="bg-black w-80 h-100"></div>
      <div className="bg-black w-80 h-100"></div>
    </section>
  );
}
