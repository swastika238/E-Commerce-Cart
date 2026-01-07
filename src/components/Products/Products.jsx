import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductCard from "./ProductCard";

import Strawberry from "../../assets/strawberry.png";
import Butter from "../../assets/butter.png";
import Eggs from "../../assets/eggs.png";
import Cabbage from "../../assets/cabbage.png";
import Eggplant from "../../assets/eggplant.png";
import Kiwi from "../../assets/kiwi.png";
import Capsicum from "../../assets/capsicum.png";

const products = [
  { id: 1, name: "Strawberry", price: "$3.00", image: Strawberry, category: "Fruits", favorite: true },
  { id: 2, name: "Butter", price: "$3.50", image: Butter, category: "Dairy", favorite: false },
  { id: 3, name: "Eggs", price: "$2.05", image: Eggs, category: "Dairy", favorite: true },
  { id: 4, name: "Cabbage", price: "$3.00", image: Cabbage, category: "Veggies", favorite: false },
  { id: 5, name: "Eggplant", price: "$2.50", image: Eggplant, category: "Veggies", favorite: false },
  { id: 6, name: "Kiwi", price: "$1.50", image: Kiwi, category: "Fruits", favorite: false },
  { id: 7, name: "Capsicum", price: "$2.25", image: Capsicum, category: "Veggies", favorite: true },
];

const Products = () => {
  const categories = ["All", "Fruits", "Veggies", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex justify-start gap-4 max-w-xl mx-auto mt-10">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 text-lg rounded-full transition ${
                  isActive ? "bg-orange-500 text-white" : "bg-zinc-100 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
