/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const products = [
  {
    title: "Engine Types: Overview of ...",
    date: "27 Apr, 2024",
    description:
      "Understanding these different engines not only enhances appreciation for automotive.",
    tags: ["DIESEL", "ELECTRIC CARS", "ENGINE", "PETROL"],
    imageUrl: "https://yourimageurl.com/engine.jpg",
  },
  {
    title: "Unveiling the Exhaust System ...",
    date: "19 Apr, 2024",
    description:
      "The exhaust system is a critical component that affects performance and emissions.",
    tags: ["CATALYST", "EXHAUST"],
    imageUrl: "https://yourimageurl.com/exhaust.jpg",
  },

  {
    title: "Suspension Systems: The Basics",
    date: "11 Apr, 2024",
    description:
      "The suspension system is crucial for ride comfort, handling, and safety.",
    tags: ["SHOCK ABSORBERS", "SUSPENSION"],
    imageUrl: "https://yourimageurl.com/suspension.jpg",
  },

  {
    title: "Transmission Systems: A Closer Look",
    date: "03 Apr, 2024",
    description:
      "The transmission system is a complex part that transfers power from the engine.",
    tags: ["GEARBOX", "TRANSMISSION"],
    imageUrl: "https://yourimageurl.com/transmission.jpg",
  },

  {
    title: "Braking Systems: The Essentials",
    date: "26 Mar, 2024",
    description:
      "The braking system is crucial for safety and performance, and it comes in various types.",
    tags: ["BRAKES", "DISC BRAKES", "DRUM BRAKES"],
    imageUrl: "https://yourimageurl.com/brakes.jpg",
  },

  {
    title: "Steering Systems: The Fundamentals",
    date: "18 Mar, 2024",
    description:
      "The steering system is essential for controlling the direction of the vehicle.",
    tags: ["POWER STEERING", "STEERING"],
    imageUrl: "https://yourimageurl.com/steering.jpg",
  },

  {
    title: "Cooling Systems: An Overview",
    date: "10 Mar, 2024",
    description:
      "The cooling system is crucial for maintaining engine temperature and performance.",
    tags: ["COOLANT", "RADIATOR"],
    imageUrl: "https://yourimageurl.com/cooling.jpg",
  },

  {
    title: "Electrical Systems: The Basics",
    date: "02 Mar, 2024",
    description:
      "The electrical system is essential for powering various components in the vehicle.",
    tags: ["ALTERNATOR", "BATTERY", "STARTER MOTOR"],
    imageUrl: "https://yourimageurl.com/electrical.jpg",
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img
      src={product.imageUrl}
      alt={product.title}
      className="h-40 w-full object-cover"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-oswald text-lg font-bold text-steel-blue">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500 mb-2">{product.date}</p>
      <p className="font-roboto text-gray-700 flex-grow">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-steel-blue border border-steel-blue rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProductRange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const numberOfVisibleProducts = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + numberOfVisibleProducts) % products.length
        );
        setTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + numberOfVisibleProducts
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-oswald font-bold text-center text-steel-blue mb-6 [text-shadow:1px_2px_3px_var(--tw-shadow-color)] shadow-black">
        Our Product Range
      </h2>
      <h5 className="font-roboto text-lg md:text-xl m-6">
        From Engine Parts to Suspension, We Have It All
      </h5>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRange;
