import React from 'react'
import { GoHeartFill } from "react-icons/go"
import { RiShoppingBag4Fill } from "react-icons/ri"
import { IoSearch } from "react-icons/io5"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-3xl font-extrabold tracking-wide">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {["Home", "About Us", "Process", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative font-semibold text-gray-800 hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden lg:flex items-center border border-orange-400 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none px-2 text-sm"
            />
            <button className="bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-orange-600 transition">
              <IoSearch size={18} />
            </button>
          </div>

          {/* Icons */}
          <a className="text-gray-700 hover:text-orange-500 transition transform hover:scale-110">
            <GoHeartFill size={22} />
          </a>

          <a className="text-gray-700 hover:text-orange-500 transition transform hover:scale-110">
            <RiShoppingBag4Fill size={22} />
          </a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
