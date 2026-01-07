import React from 'react';
import Button from '../Button/Button';
import FruitSet from '../../assets/fresh-fruits.png';

const Discount = () => {
  return (
    <section
      className="relative py-10"
      style={{
        backgroundImage: `url(${FruitSet})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto flex items-start gap-6 px-6">
        {/* Rotated 20% badge */}
        <div className="text-5xl md:text-6xl text-orange-400 font-bold transform -rotate-12 drop-shadow-lg">
          20%
        </div>

        {/* Text Content */}
        <div className="flex-1 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">First Order Discount</h3>
          <p className="mb-4 text-sm md:text-base">
            Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
