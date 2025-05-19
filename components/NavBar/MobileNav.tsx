import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useCart } from "@/contexts/CartContext";
import SearchModal from "../SearchModal";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";
import CartModal from "../CartModal";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

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
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all 
         duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center pl-8 flex flex-col h-full
          transition-all duration-500 delay-300 w-[80%] sm:w-[60%]
          bg-indigo-800 space-y-6 z-[100006]`}
      >
        
        <div className="flex items-center mt-4 mb-6">
          <span className="text-xl font-semibold mr-39">Menu</span>

          <div onClick={() => setIsCartOpen(true)} className="relative">
           <FaShoppingCart className="text-xl text-white" />
           {totalQuantity > 0 && (
             <span className="absolute -top-2 -right-2 bg-[#7D0101] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
               {totalQuantity}
             </span>
           )}
         </div>

        </div>

        {/* Search */}
        <div className="mb-6">
          <div
            className="flex items-center bg-[#262626] rounded-full px-4 py-2 "
            onClick={() => setIsModalOpen(true)}
          >
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full placeholder-gray-400 text-sm"
            />
          </div>
        </div>
        {/* Links */}
        <div className="space-y-6">
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <div>
              <p className="font-semibold">Categories</p>
              <ul className="mt-2 space-y-2">
                {categoryItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Help</p>
              <ul className="mt-2 space-y-2">
                {helpItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/help/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="bg-[#7D0101] px-4 py-2 rounded">Sign Up</button>
              <button className="border border-white px-4 py-2 rounded">Login</button>
            </div>
          </div>
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-2 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default MobileNav;
