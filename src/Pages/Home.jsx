// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-32">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x800')] bg-cover bg-center opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to BH Bank Tunisia</h1>
          <p className="text-xl mb-8">Your Trusted Partner in Financial Growth</p>
          <a 
            href="#services" 
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 "
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">About BH Bank Tunisia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BH Bank Tunisia is a leading financial institution dedicated to providing innovative banking solutions to individuals and businesses. With a rich history spanning over decades, we have built a reputation for trust, reliability, and excellence in the financial sector.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower our customers by offering a wide range of financial products and services tailored to meet their unique needs. Whether you're looking for personal banking, business loans, or investment opportunities, BH Bank Tunisia is here to help you achieve your financial goals.
            </p>
          </div>
          <div>
            <img 
              src="https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2023/04/tunisie-wmc-bourse-bh.jpg" 
              alt="BH Bank Tunisia" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://img.freepik.com/vecteurs-premium/illustration-plate-facile-utiliser-services-bancaires-mobiles_203633-7624.jpg?w=740" 
                alt="Personal Banking" 
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Personal Banking</h3>
              <p className="text-gray-600">Tailored financial solutions to help you manage your money effectively.</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://img.freepik.com/photos-gratuite/audit-actifs-du-compte-banque-comptabilite-finance-concept_53876-124924.jpg?t=st=1742785124~exp=1742788724~hmac=2399694239c542486d534436c0a11012981cfe613e83a6785f4c04df6ae12ca0&w=996" 
                alt="Business Loans" 
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-gray-600">Flexible loan options to support your business growth.</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://img.freepik.com/photos-gratuite/graphique-investissement-economie-bourse_53876-138489.jpg?t=st=1742785168~exp=1742788768~hmac=f64b3216305e878437b3204175f57a6171f5aad817f2b453721e21d6769647b2&w=996" 
                alt="Investment Solutions" 
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Investment Solutions</h3>
              <p className="text-gray-600">Expert advice and tools to grow your wealth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow with Us?</h2>
          <p className="text-xl mb-8">Join BH Bank Tunisia today and take the first step towards achieving your financial goals.</p>
          <a 
            href="/signUp" 
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;