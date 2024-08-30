import React from 'react';

const WhyTrustUs = () => {
  const trustPoints = [
    {
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
    },
  ];

  return (
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
  );
};

export default WhyTrustUs;
