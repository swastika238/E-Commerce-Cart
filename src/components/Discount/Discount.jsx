import React from 'react';
import Button from '../Button/Button';

const Discount = () => {
  return (
    <section className='bg-zinc-100 relative py-10 overflow-hidden'>
      {/* Rotated Badge */}
    
      <div className='max-w-2xl mx-auto text-center'>
        <span className="text-9xl"></span>
        <h3 className='text-3xl font-bold mb-4'>First Order Discount</h3>
        <p className='text-gray-600 mb-6'>
          Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
        </p>
        <Button content="Get a Discount" />
      </div>
    </section>
  );
};

export default Discount;
