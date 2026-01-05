import React from 'react';
import Grocery from '../../assets/grocery.png';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-28 min-h-screen flex items-center bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-10 grid md:grid-cols-2 items-center gap-10">

        {/* Text Content */}
        <div className="space-y-6">
          <span className="bg-orange-100 text-orange-500 text-sm px-5 py-2 rounded-full">
            Export Best Quality....
          </span>

          <h1 className="text-4xl md:text-5xl font-bold">
            Tasty Organic <span className="text-orange-500">Fruits & Veggies</span> In Your City
          </h1>

          <p className="max-w-md text-gray-600 text-[18px] leading-8 font-['Dancing_Script']">
            We provide fresh, organic, and healthy groceries directly from our store 
            to your doorstep — quality you can taste, freshness you can trust.
          </p>

          {/* Button to Shop Now */}
          <Button content="Shop Now" />

          
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img src={Grocery} alt="Hero Image" className="w-[80%] max-w-md" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
