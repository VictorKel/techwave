import { FaSearch, FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";
import CartModal from "@/components/CartModal";
import { useRouter } from "next/router";
import { useCart } from "../contexts/CartContext";

export default function Nav() {
  const [navBg, setNavBg] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const router = useRouter();
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [bounce, setBounce] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  // Calculate total quantity
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (totalQuantity !== cartCount) {
      setBounce(true);
      setCartCount(totalQuantity);
      const timeout = setTimeout(() => setBounce(false), 300); // remove bounce after animation
      return () => clearTimeout(timeout);
    }
  }, [totalQuantity]);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setShowHelp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={30}
            onClick={() => router.push("/")}
          />

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
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => router.push("/services")}
            >
              <span>Services</span>
            </div>

            {/* Category Dropdown */}
            <div className="relative" ref={categoryRef}>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setShowCategories(!showCategories);
                  setShowHelp(false);
                }}
              >
                <span>Category</span>
                {showCategories ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
              {showCategories && (
                <div
                  className={`absolute top-full right-0 mt-4 w-[450px] bg-white text-black shadow-lg rounded-md grid grid-cols-2 gap-1 p-4 z-50
                  transition-all duration-300 transform ${
                    showCategories
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {categoryItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/category/${encodeURIComponent(
                        item.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="hover:bg-gray-100 px-2 py-1 rounded text-sm block transition-colors duration-200 hover:text-[#7D0101]"
                      onClick={() => setShowCategories(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Help Dropdown */}
            <div className="relative" ref={helpRef}>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setShowHelp(!showHelp);
                  setShowCategories(false);
                }}
              >
                <span>Help</span>
                {showHelp ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
              {showHelp && (
                <div
                  className={`absolute top-full left-0 mt-4 w-[350px] bg-white text-black shadow-lg rounded-md grid grid-cols-2 gap-1 p-4 z-50
                  transition-all duration-300 transform ${
                    showHelp
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {helpItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/help/${encodeURIComponent(
                        item.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="hover:bg-gray-100 px-2 py-1 rounded text-sm block"
                      onClick={() => setShowHelp(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingCart className="text-lg" />
              {totalQuantity > 0 && (
                <span
                  className={`absolute -top-3 -right-3 bg-[#7D0101] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full transition-transform duration-300 ${
                    bounce ? "animate-bounce-cart" : ""
                  }`}
                >
                  {totalQuantity}
                </span>
              )}
            </div>

            <span className="cursor-pointer text-gray-300">Login</span>
            <button className="bg-[#7D0101] hover:bg-orange-700 text-white px-4 py-1.5 cursor-pointer rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
