import { FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Nav() {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-white w-5 h-5 rounded-sm" /> {/* Placeholder logo */}
        <span className="font-semibold text-lg">Tech Wave</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-6">
        <div className="flex items-center bg-zinc-800 rounded-full px-4 py-2 max-w-xl w-full mx-auto">
          <FaSearch className="text-zinc-400 mr-2" />
          <input
            type="text"
            placeholder="Search cabling, Router"
            className="bg-transparent outline-none text-white w-full"
          />
        </div>
      </div>

      {/* Right: Menu */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Category</span>
          <span>▾</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Help</span>
          <span>▾</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaShoppingCart />
          <span>Cart (0)</span>
        </div>
        <span className="cursor-pointer text-zinc-300">Login</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
}
