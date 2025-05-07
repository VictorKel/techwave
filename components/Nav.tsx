import { FaSearch, FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed w-full transition-all duration-200 h-20 z-[1000] ${
        navBg ? "shadow-md backdrop-blur-md bg-black/70" : "bg-[#111111]"
      }`}
    >
      <div className="text-white flex items-center h-full justify-between w-[90%] xl:w-[87%] mx-auto ">
        <Image src="/images/Logo.png" alt="Logo" width={150} height={30} />

        <div className="flex-1 mx-8">
          <div className="flex items-center bg-[#262626] rounded-full px-4 py-2 max-w-xl w-80 mx-auto">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search cabling, Router"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Services</span>
            <span>
                <ChevronDown className="w-4 h-4" />
              </span>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Help</span>
            <span>
              <ChevronDown className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaShoppingCart />
            <span>Cart (0)</span>
          </div>
          <span className="cursor-pointer text-gray-300">Login</span>
          <button className="bg-[#7D0101] hover:bg-orange-700 text-white px-4 py-1.5 cursor-pointer rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
