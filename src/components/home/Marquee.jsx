import React from 'react';
import './../../index.css'

const clients = [

  "/Ashok Leyland.png",
  "/Brakes India.png",
  "/Gabriel.png",
  "/Lumnx.png",
  "/Mahindra.png",
  "/Maruti Suzuki.png",
  "/MEI.jpeg",
  "/Meritor.png",
  "/NRB BEARINGS.png",
  "/Rane.png",
  "/SKF.png",
  "/Spicer.png",
  "/TATA.png",
  "/Timken.png",
  "/UNO MINDA.png",
  "/Valeo.png",
  
];

const ClientsMarqueeSection = () => {
    return (
      <section className="py-10 ">
        <h2 className="text-center text-3xl font-oswald mb-8">Our Clients</h2>
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee">
             {
  clients.map((logo, idx) => (
    <div
      key={idx}
      className="p-4 w-1/6 md:w-1/4 sm:w-1/2 flex justify-center items-center"
    >
      <img
        src={logo}
        alt={`Client Logo ${idx + 1}`}
        className="max-w-full h-auto object-contain"
      />
    </div>
  ))
}
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientsMarqueeSection;
