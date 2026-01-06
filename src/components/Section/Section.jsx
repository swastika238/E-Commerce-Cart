import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

import FruitsSec from "../../assets/fruits-and-veggies.png";
import SeaFoodSec from "../../assets/meat-and-seafood.png";
import Dairy from "../../assets/dairy-and-eggs.png";

const sections = [
  {
    id: 1,
    title: "Fruits and Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsSec,
  },
  {
    id: 2,
    title: "Dairy and Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: Dairy,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodSec,
  },
];

const Section = () => {
  return (
    <section className="py-20">
      <Heading highlight="Shop" heading="by Category" />

      <div className="grid md:grid-cols-3 gap-8 px-10 mt-12">
        {sections.map((card) => (
          <div key={card.id} className="bg-white p-6 shadow rounded-xl">
            <img
              src={card.image}
              alt={card.title}
              className="w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {card.description}
            </p>
            <Button content="See all"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
