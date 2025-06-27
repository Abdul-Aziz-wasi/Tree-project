import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        
        
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-green-700">About Us</h2>
          <p className="text-gray-600 text-lg">
            We are passionate about making the world greener—one plant at a time. Our mission is to help you grow, track, and care for your plants effortlessly, whether you're a beginner or a plant expert. 
          </p>
          <p className="text-gray-600 text-lg">
            Our application provides tools to monitor watering, care levels, and plant health, giving you the perfect green companion for your home or office.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
