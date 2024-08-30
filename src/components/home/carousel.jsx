<<<<<<< HEAD
import { useState, useEffect } from "react";

const clients = [
  { name: "Ashok Leyland", logo: "/Ashok Leyland.png" },
=======
import React, { useState, useEffect } from "react";

const clients = [
    { name: "Ashok Leyland", logo: "/Ashok Leyland.png" },
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
  { name: "Mahindra", logo: "/Mahindra.png" },
  { name: "Maruti Suzuki", logo: "/Maruti Suzuki.png" },
  { name: "TATA", logo: "/TATA.png" },
  { name: "SPICER", logo: "/Spicer.png" },
  { name: "MERITOR", logo: "/Meritor.png" },
  { name: "MEI", logo: "/MEI.jpeg" },
  { name: "Rane", logo: "/Rane.png" },
  { name: "WABCO", logo: "/Wabco.svg" },
  { name: "SKF", logo: "/SKF.png" },
  { name: "TIMKEN", logo: "/Timken.png" },
  { name: "NRB", logo: "/NRB BEARINGS.png" },
  { name: "Gabriel", logo: "/Gabriel.png" },
  { name: "Valeo", logo: "/Valeo.png" },
  { name: "Brakes India", logo: "/Brakes India.png" },
  { name: "LUMNX", logo: "/Lumnx.png" },
  { name: "UNO MINDA", logo: "/UNO MINDA.png" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD
  const logosPerView = 3;
=======
  const logosPerView = 3; 
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338

  // Automatic transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
<<<<<<< HEAD
    }, 2000);
=======
    }, 4000);
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
<<<<<<< HEAD
    setCurrentIndex((prevIndex) => (prevIndex + logosPerView) % clients.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - logosPerView + clients.length) % clients.length
=======
    setCurrentIndex((prevIndex) =>
      (prevIndex + logosPerView) % clients.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - logosPerView + clients.length) % clients.length
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
    );
  };

  const visibleClients = clients.slice(
    currentIndex,
    currentIndex + logosPerView
  );

  return (
    <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
      <h2 className="text-3xl font-bold mb-2 [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-slate-900">
        OUR CLIENTS
      </h2>
=======
      <h2 className="text-3xl font-bold mb-2 [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-slate-900">OUR CLIENTS</h2>
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
      <p className="mb-4">
        Tempo House Over the Past 50 Years, has Garnered an Enviable List of
        Clientele
      </p>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &#10094;
        </button>
        <div className="flex space-x-4 transition-transform duration-500 ease-in-out transform-gpu">
<<<<<<< HEAD
          {visibleClients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 object-contain sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-500 ease-in-out transform-gpu"
            />
          ))}
=======
            {visibleClients.map((client, index) => (
            <img
            key={index}
            src={client.logo}
            alt={client.name}
            className="w-24 h-24 object-contain sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-500 ease-in-out transform-gpu"
            />          
            ))}
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
