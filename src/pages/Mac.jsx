import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mac3D from "../components/Mac3D";

import mac1 from "../assets/mac1.jpg";
import mac2 from "../assets/mac2.jpg";
import mac3 from "../assets/mac3.jpg";

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

    gsap.from(".card-mac", {
      y: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".card-mac-section",
        start: "top 50%",
        once: true,
      },
    });
  });
  return (
    <main>
      <section className="realtive flex min-h-screen bg-white items-center justify-center">
        <div className="mac-card z-10 absolute h-[700px] w-full">
          <Mac3D />
        </div>

        <h1 className=" title px-10 tracking-[0.05em] flex absolute inset-0 w-170 z-0 justify-center items-center text-9xl font-light">
          Macbook Pro M3
        </h1>
      </section>
      <div className="h-16 bg-linear-to-b from-white to-gray-100"></div>

      <section className="h-200 w-full bg-gray-100"></section>
      <div className="h-16 bg-linear-to-b from-gray-100 to-white"></div>

      <section className="card-mac-section h-200 gap-5 justify-center items-center white flex">
        <div className="card-mac h-150 w-100 flex flex-col bg-white rounded-lg">
          <img src={mac1} alt="" className="h-100 w-full" />
          <h1 className="p-5 text-2xl font-semibold">MacBook Neo</h1>
          <button className="flex justify-center items-center p-5 mx-5 bg-black h-10 w-30 rounded-full text-white">
            buy now
          </button>
        </div>
        <div className="card-mac flex flex-col h-150 w-100 bg-white ">
          <img src={mac2} alt="" className="h-100 w-full " />
          <h1 className="p-5 text-2xl font-semibold">
            {" "}
            MacBook Air 13" and 15"
          </h1>
          <button className="flex justify-center items-center p-5 mx-5 bg-black h-10 w-30 rounded-full text-white">
            buy now
          </button>
        </div>
        <div className="card-mac flex flex-col h-150 w-100 bg-white rounded-lg">
          <img src={mac3} alt="" className="h-100 w-full " />
          <h1 className="p-5 text-2xl font-semibold">MacBook Pro 14 dan 16"</h1>

          <button className="flex justify-center items-center p-5 mx-5 bg-black h-10 w-30 rounded-full text-white">
            buy now
          </button>
        </div>
      </section>
    </main>
  );
}
