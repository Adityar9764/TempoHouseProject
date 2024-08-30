<<<<<<< HEAD

import { FaUsers, FaMedal, FaShieldAlt, FaThumbsUp } from "react-icons/fa";
=======
import React from 'react';
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338

const WhyTrustUs = () => {
  const trustPoints = [
    {
<<<<<<< HEAD
      icon: <FaUsers className="text-4xl text-gray-500" />,
      title: "2,000+ Satisfied Customers",
      description:
        "Our commitment to quality has earned us a loyal customer base.",
    },
    {
      icon: <FaMedal className="text-4xl text-yellow-500" />,
      title: "50+ Years of Experience",
      description:
        "Decades of industry expertise in providing quality automobile parts.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "Trusted Brands",
      description: "We partner with the most reliable brands in the industry.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-green-500" />,
      title: "Quality Assurance",
      description: "Every part we sell undergoes stringent quality checks.",
=======
      title: 'Customer Satisfaction',
      description: 'Serving satisfied customers for over 50 years',
      icon: '/satisfaction.png', 
    },
    {
      title: 'Original Products',
      description: 'Top-notch parts sourced from trusted manufacturers',
      icon: '/original.png',
    },
    {
      title: 'Customer Support',
      description: 'Dedicated support for a seamless experience',
      icon: '/help-desk.png',
    },
    {
      title: 'Affordable Rates',
      description: 'Tempo House offers a good solution if you are on a budget',
      icon: '/money.png',
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
    },
  ];

  return (
<<<<<<< HEAD
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-slate-900">
        Why Trust Us?
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg"
          >
            {point.icon}
            <h3 className="font-semibold text-lg mt-4 mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
=======
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-steel-blue-dark [text-shadow:1px_1px_4px_var(--tw-shadow-color)] shadow-blue-600">
          Why Trust Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={point.icon}
                alt={point.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> d6cea6b79087024af630aaabe21324b2379af338
  );
};

export default WhyTrustUs;
