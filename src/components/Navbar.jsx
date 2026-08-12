import { FaApple, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const menu = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-11 bg-gray-50 z-50">
      <div className="flex h-full items-center px-8 gap-13 justify-center">
        <FaApple />

        {menu.map((item) => (
          <a href="#" key={item} className="text-sm hover:scale-105">
            {item}
          </a>
        ))}

        <button className="cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
}
