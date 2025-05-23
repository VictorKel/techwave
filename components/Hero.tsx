'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  {
    image: '/hero1.png',
    heading: 'Reliable Connections for',
    subheading: 'Critical Detection',
    paragraph: 'Expert installation and maintenance for dependable connectivity.',
    paragraph1: '',
    showSubtext: true,
  },
  {
    image: '/hero2.png',
    heading: "Connecting you reliably. Your network's",
    subheading: 'foundation for today and tomorrow.',
    paragraph: 'Expert installation and maintenance for dependable connectivity. High-performance infrastructure,',
    paragraph1: 'tailored to your needs, from design to installation.',
    showSubtext: false,
  },
];

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex items-center px-6 md:px-20 pt-32 md:pt-50">
                <div className="text-white max-w-lg md:max-w-3xl">
                  {slide.showSubtext && (
                    <div className="flex items-center gap-2 bg-white/30 text-white px-3 py-1.5 rounded-md w-max mb-3 text-xs md:text-sm">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="font-medium">Radiation Detection Equipment</span>
                    </div>
                  )}
                  <h1 className="text-2xl md:text-4xl font-semibold leading-snug md:leading-tight">
                    {slide.heading}
                    <br />
                    {slide.subheading}
                  </h1>
                  <p className="text-sm md:text-base mt-3 md:mt-4">
                    {slide.paragraph}
                    <br />
                    {slide.paragraph1}
                  </p>
                  <button className="mt-6 px-5 py-2.5 md:px-6 md:py-3 bg-[#7D0101] text-white rounded-md text-sm md:text-base">
                    Connect With Our Experts
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};