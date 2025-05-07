import { FaSearch, FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";

export default function Nav() {
  const [navBg, setNavBg] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const categoryItems = [
    "Tracking Devices",
    "IT Solutions Products",
    "Radiation Detection Equipment",
    "Software",
    "Access Control Systems",
    "Security Systems",
    "Computer & Servers",
    "CCTV & Surveillance Systems",
    "Telephone Systems",
    "Anti Terrorist Equipment",
    "Accessories & Consumables",
    "Network Solution",
  ];

  const helpItems = [
    "Address Books",
    "Order History",
    "Wishlist",
    "Recurring Payments",
    "Returns & Refunds",
    "Track an order",
  ];

  return (
    <>
      <div
        className={`fixed w-full transition-all duration-200 h-20 z-[1000] ${
          navBg ? "shadow-md backdrop-blur-md bg-black/70" : "bg-[#111111]"
        }`}
      >
        <div className="text-white flex items-center h-full justify-between w-[90%] xl:w-[87%] mx-auto ">
          <Image src="/images/Logo.png" alt="Logo" width={150} height={30} />

          <div className="flex-1 mx-8">
            <div
              className="flex items-center bg-[#262626] rounded-full px-4 py-2 max-w-xl w-80 mx-auto cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <FaSearch className="text-gray-600 mr-2" />
              <span className="text-gray-600">Search cabling, Router</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Services</span>
            </div>

            {/* Category Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Category</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {showCategories && (
                <div className="absolute top-full left-0 mt-2 w-[400px] bg-white text-black shadow-lg rounded-md grid grid-cols-2 gap-2 p-4 z-50">
                  {categoryItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/category/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:bg-gray-100 px-2 py-1 rounded text-sm block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Help Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Help</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {showHelp && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black shadow-lg rounded-md grid grid-cols-2 gap-2 p-4 z-50">
                  {helpItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/help/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:bg-gray-100 px-2 py-1 rounded text-sm block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
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

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};