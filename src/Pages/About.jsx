// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About BH Bank Tunisia</h1>
          <p className="text-xl">Your Trusted Financial Partner</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-red mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              BH Bank Tunisia is a leading financial institution dedicated to providing innovative banking solutions to individuals and businesses. With a rich history spanning over decades, we have built a reputation for trust, reliability, and excellence in the financial sector.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our mission is to empower our customers by offering a wide range of financial products and services tailored to meet their unique needs. Whether you're looking for personal banking, business loans, or investment opportunities, BH Bank Tunisia is here to help you achieve your financial goals.
            </p>
          </div>
          <div>
            <img 
              src="https://managers.tn/wp-content/uploads/2022/04/Photo-Siege-BH-Bank.jpg" 
              alt="BH Bank Tunisia" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/200x200" 
                alt="Team Member 1" 
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/200x200" 
                alt="Team Member 2" 
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CFO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/200x200" 
                alt="Team Member 3" 
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;