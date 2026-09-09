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

import { useGSAP } from "@gsap/react";
import { productAnimation } from "../animations/productAnimation";

export default function iPhone() {
  useGSAP(() => {
    productAnimation();
  });
  return (
    <main className="animate-home">
      <section className="h-100 bg-white">
        <h1 className="iphone-title pl-10 pt-10 text-6xl sm:text-7xl md:text-8xl ">
          iPhone
        </h1>

        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory md:gap-10 px-10 [&::-webkit-scrollbar]:hidden gap-20 pl-20 pt-10">
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

      <section className="iphone-section relative h-200 w-full bg-gray-100 flex items-center justify-center">
        <h1 className="absolute inset-0 flex items-center justify-center z-0 text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-[0.08em] font-medium text-center">
          iPhone 17 Pro Max
        </h1>

        <div className="iphone-3d relative z-10 w-[350px] sm:w-[450px] lg:w-[600px] h-[400px] sm:h-[550px] lg:h-[700px] flex items-center justify-center">
          <Iphone3D />
        </div>
      </section>
      <div className="h-16 bg-gradient-to-b from-gray-100 to-white" />

      <section className="iphone-card-section flex h-300 flex-col justify-center gap-10 pt-10">
        <section className="iphone-card-section py-10">
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 px-10 [&::-webkit-scrollbar]:hidden lg:gap-25 lg:justify-center ">
            {/* Card 1 */}
            <div className="iphone-card h-110 w-60 sm:w-70 md:w-85 shrink-0 snap-center bg-gray-100 rounded-3xl pb-6 flex flex-col justify-between overflow-hidden">
              <div>
                <img
                  src={ipcard1}
                  alt=""
                  className="h-60 w-full object-cover rounded-t-3xl"
                />
                <h1 className="px-5 pt-3 text-xl font-semibold">
                  iPhone 17 Pro
                </h1>
                <p className="px-5 pt-1 text-gray-500">manteppp. anjay</p>
              </div>

              <div className="px-5">
                <button className="btn rounded-full bg-black px-5 py-2 text-sm text-white cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="iphone-card h-110 w-60 sm:w-70 md:w-85 shrink-0 snap-center bg-gray-100 rounded-3xl pb-6 flex flex-col justify-between overflow-hidden">
              <div>
                <img
                  src={ipcard2}
                  alt=""
                  className="h-60 w-full object-cover rounded-t-3xl"
                />
                <h1 className="px-5 pt-3 text-xl font-semibold">iPhone Air</h1>
                <p className="px-5 pt-1 text-gray-500">manteppp. anjay</p>
              </div>

              <div className="px-5">
                <button className="btn rounded-full bg-black px-5 py-2 text-sm text-white cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="iphone-card h-110 w-60 sm:w-70 md:w-85 shrink-0 snap-center bg-gray-100 rounded-3xl pb-6 flex flex-col justify-between overflow-hidden">
              <div>
                <img
                  src={ipcard3}
                  alt=""
                  className="h-60 w-full object-cover rounded-t-3xl"
                />
                <h1 className="px-5 pt-3 text-xl font-semibold">iPhone 17</h1>
                <p className="px-5 pt-1 text-sm text-gray-500">
                  Pro. Powerful. Titanium.
                </p>
              </div>

              <div className="px-5">
                <button className="btn rounded-full bg-black px-5 py-2 text-sm text-white cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="rounded-lg mt-10">
          <h2 className=" text-3xl sm:text-5xl md:text-7xl text-center py-10 px-10 tracking-[1em]">
            Think Different
          </h2>
        </div>
      </section>

      <section className="h-96 sm:h-125 lg:h-screen w-full flex bg-white overflow-hidden">
        <video
          className="w-full h-full object-cover"
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
