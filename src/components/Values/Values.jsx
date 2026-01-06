import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const values = [
    {
      id: 1,
      title: "Trust",
      para: "We are committed to delivering fresh and high-quality products you can rely on every time.",
      icon: <FaHeart className="text-green-500" />,
    },
    {
      id: 2,
      title: "Food Safety",
      para: "Our products are carefully handled and certified to ensure the highest safety standards.",
      icon: <FaShieldAlt className="text-green-500" />,
    },
    {
      id: 3,
      title: "100% Organic",
      para: "All our products come directly from farms and are 100% natural and pesticide-free.",
      icon: <FaSeedling className="text-green-500" />,
    },
    {
      id: 4,
      title: "Always Fresh",
      para: "We guarantee freshness in every delivery, so you enjoy the best taste and nutrition.",
      icon: <FaLeaf className="text-green-500" />,
    },
  ];

  // Split values into left and right columns
  const leftValues = values.slice(0, 2); // id1, id2
  const rightValues = values.slice(2);   // id3, id4

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            {leftValues.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 bg-white"
              >
                <div className="text-4xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={Basket}
              alt="Basket of Vegetables"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            {rightValues.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 bg-white"
              >
                <div className="text-4xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
