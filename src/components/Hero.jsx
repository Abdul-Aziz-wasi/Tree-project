import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    id: 'slide1',
    title: 'Grow Nature ',
    description: 'Manage your indoor plants with ease and learn how to take care of them..',
    img: 'https://demo.yolotheme.com/begreen/wp-content/uploads/2016/08/portfolio52.jpg',
    
  },
  {
    id: 'slide2',
    title: 'Track Your Plants ',
    description: 'Set watering reminders, track plant health, and never miss a care schedule.',
    img: 'https://demo.yolotheme.com/begreen/wp-content/uploads/2016/08/portfolio51.jpg',
    
  },
  {
    id: 'slide3',
    title: 'Make Space Greener ',
    description: 'Bring nature into your home and workplace with easy-to-grow plants.',
    img: 'https://demo.yolotheme.com/begreen/wp-content/uploads/2016/08/portfolio39.jpg',
    
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    timeoutRef.current = setInterval(nextSlide, 2000); 

    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-5 bg-base-100 rounded-xl shadow-md overflow-hidden min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 h-full transition-all duration-700 ease-in-out">
       
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-4xl font-bold text-green-700">
            {slides[currentIndex].title}
          </h1>
          <p className="text-gray-600">{slides[currentIndex].description}</p>
        </div>

        
        <div className="lg:w-1/2  mt-5 lg:mt-0">
          <img
            src={slides[currentIndex].img}
            alt="Plant"
            className="w-full lg:h-[380px] rounded-md shadow-lg"
          />
        </div>
      </div>

     
      <div className="flex justify-center gap-2 py-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-green-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
