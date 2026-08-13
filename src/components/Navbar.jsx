import { FaApple, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
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
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 z-50 h-11 w-full bg-gray-50">
      <div className="flex h-full items-center justify-center gap-13 px-8">
        <Link to="/">
          <FaApple />
        </Link>

        {menu.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className="text-sm hover:scale-105"
          >
            {item.name}
          </Link>
        ))}

        <button className="cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
}
