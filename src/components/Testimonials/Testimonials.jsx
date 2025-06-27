import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Sarah Ali',
    photo: 'https://i.pravatar.cc/100?img=5',
    message: 'This app has made taking care of my plants so easy! 🌿',
  },
  {
    name: 'John Mia',
    photo: 'https://i.pravatar.cc/100?img=7',
    message: 'I love how I can track watering dates. Highly recommended! 💧',
  },
  {
    name: 'Farhan',
    photo: 'https://i.pravatar.cc/100?img=15',
    message: 'Great design and useful features for plant lovers. 🪴',
  },
  {
    name: 'Arifa',
    photo: 'https://i.pravatar.cc/100?img=20',
    message: 'Excellent app, keeps my plants healthy and happy!',
  },
  {
    name: 'Nusrat Ali',
    photo: 'https://i.pravatar.cc/100?img=18',
    message: 'User-friendly and very helpful for beginners.',
  },
];

const Testimonials = () => {
  return (
    <section className="my-16 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
         What Our Users Say
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2 text-sm italic">"{testimonial.message}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
