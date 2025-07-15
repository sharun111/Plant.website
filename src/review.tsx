'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';

export default function Review() {
  const reviews = [
    {
      name: 'John Doe',
      role: 'Designer',
      image: '/ai-generated-studio-portrait-of-handsome-indian-man-on-colour-background-photo.jpg', // replace with your image
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.',
    },
    {
      name: 'Alice Smith',
      role: 'Developer',
      image: '/OIP (1).webp',
      quote:        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.',

    },
    {
      name: 'Mark Lee',
      role: 'Manager',
      image: '/OIP.webp',
      quote:        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.',

    }, {
      name: 'Mark Lee',
      role: 'Manager',
      image: '/Adam-Jakab.png',
      quote:        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.',

    },
  ];

  return (
    <section className="py-20 bg-[#003320]">
      <div className="text-center mb-12">
        <h2 className="text-2xl text-yellow-400 font-bold">Customer Reviews</h2>
        <p className="text-slate-200 mt-2">What our users say</p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-800 rounded-xl p-6 shadow-lg h-full flex flex-col justify-between text-white font-serif">
                <p className="text-lg italic leading-relaxed">
                  {review.quote}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
                    />
                    <div>
                      <p className="text-yellow-400 uppercase font-bold text-sm">
                        {review.name}
                      </p>
                      <p className="text-slate-300 text-xs">{review.role}</p>
                    </div>
                  </div>
                  <i className="ri-double-quotes-r text-2xl text-white opacity-80"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
