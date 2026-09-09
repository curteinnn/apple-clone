import { FaApple, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const menu = [
    { name: "Store", path: "/store" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "AirPods", path: "/airpods" },
    { name: "TV & Home", path: "/tv-home" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Accessories", path: "/accessories" },
    { name: "Support", path: "/support" },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".navbar",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
      },
    );
  });

  return (
    <nav className="navbar fixed top-0 left-0 z-50 h-11 w-full bg-gray-50 px-4 lg:px-8">
      <div className="flex h-full items-center justify-between lg:justify-center lg:gap-13">
        <Link to="/">
          <FaApple className="text-lg" />
        </Link>

        <div className="hidden lg:flex items-center gap-10 px-8">
          {menu.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="text-sm hover:bg-white p-1 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="cursor-pointer">
          <FaSearch className="text-sm" />
        </button>
      </div>
    </nav>
  );
}
