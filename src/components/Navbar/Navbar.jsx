import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 shadow-sm z-50">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-black">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-x-8">
          <li>
            <a href="#" className="font-semibold text-yellow-500 hover:text-yellow-400 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-black hover:text-yellow-400 transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-black hover:text-yellow-400 transition-colors duration-300">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-black hover:text-yellow-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* NavAction */}
        <div className='flex items-center gap-x-5'>
          {/* Search Field */}
          <div className='flex p-1 border-2 border-orange-500 rounded-full'>
            <input 
              type="text" 
              placeholder='Search...' 
              autoComplete='off'
              className='flex-1 h-[5vh] px-3 focus:outline-none' 
            />
            <button className='bg-gradient-to-b from -red-600 to orange-500 -500 text-white w-10 h-10 flex justify-center items-center rounded-full'>
              <IoSearch size={20} />
            </button>
          </div>

          {/* Heart Icon */}
          <a href="#" className='text-zinc-800 text-2xl'>
            <GoHeartFill size={24} />
          </a>

          {/* Shopping Bag Icon */}
          <a href="#" className='text-zinc-800 text-2xl'>
            <RiShoppingBag4Fill size={24} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
