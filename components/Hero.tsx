'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  {
    image: '/hero1.png',
    heading: 'Reliable Connections for',
    subheading: "Critical Detection",
    paragraph:
      'Expert installation and maintenance for dependable connectivity.',
    paragraph1:
      '',
    showSubtext: true,
  },
  {
    image: '/hero2.png',
    heading: 'Connecting you reliably. Your network\'s',
    subheading: 'foundation for today and tomorrow.',
    paragraph:
      'Expert installation and maintenance for dependable connectivity. High-performance infrastructure,',
    paragraph1:
      'tailored to your needs, from design to installation.',
    showSubtext: false,
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
              <div className="flex items-center px-20 pt-50">
                <div className="text-white max-w-3xl">
                 {slide.showSubtext && (
                    <div className="flex items-center gap-2 bg-white/30 text-white px-3 py-2 rounded-md w-max mb-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-xs font-medium">Radiation Detection Equipment</span>
                    </div>
                  )}
                  <h1 className="text-4xl font-semibold leading-tight">
                    {slide.heading}
                    <br />
                    {slide.subheading}
                  </h1>
                  <p className="text-sm mt-4">
                    {slide.paragraph}
                    <br />
                    {slide.paragraph1}
                  </p>
                  <button className="mt-6 px-6 py-3 bg-[#7D0101] text-white rounded-md text-base">
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




// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const backgroundImages = [
//   '/hero1.png',
//   '/hero2.png',
// ];

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         speed={1000}
//         slidesPerView={1}
//         className="h-full w-full"
//       >
//         {backgroundImages.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="h-full w-full bg-cover bg-center flex items-center"
//               style={{ backgroundImage: `url(${img})` }}
//             >
//               <div className="bg-black bg-opacity-50 w-full h-full flex items-center px-20">
//                 <div className="text-white max-w-3xl">
//                   <h1 className="text-5xl font-semibold leading-tight">
//                     Connecting you reliably. Your network's <br />
//                     foundation for today and tomorrow.
//                   </h1>
//                   <p className="text-lg mt-6">
//                     Expert installation and maintenance for dependable connectivity.
//                     High-performance infrastructure tailored to your needs.
//                   </p>
//                   <button className="mt-6 px-6 py-3 bg-[#7D0101] text-white rounded-md text-lg">
//                     Connect With Our Experts
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };







// import { useEffect, useState } from "react";

// const images = ["/hero1.png", "/hero2.png", "/hero.png"];

// export default function Hero() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         (prevIndex + 2) % images.length
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="bg-cover h-[100vh] bg-center transition-all duration-1000 ease-in-out"
//       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//     >
//       <div className="pl-20 pt-89 text-white">
//         <h1 className="text-5xl font-semibold">
//           Connecting you reliably. Your network's <br />
//           foundation for today and tomorrow.
//         </h1>
//         <p className="text-sm mt-6">
//           Expert installation and maintenance for dependable connectivity.
//           High-performance infrastructure, <br />
//           tailored to your needs, from design to installation.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-[#7D0101] text-base cursor-pointer text-white rounded-md">
//           Connect With Our Experts
//         </button>
//       </div>
//     </section>
//   );
// };


// // components/Hero.tsx
// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// const backgroundImages = [
//   '/hero1.jpg',
//   '/hero2.jpg',
//   '/hero3.jpg',
// ];

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="h-full w-full"
//       >
//         {backgroundImages.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${img})` }}
//             >
//               <div className="pl-20 pt-40 text-white h-full flex flex-col justify-center bg-black bg-opacity-30">
//                 <h1 className="text-5xl font-semibold">
//                   Connecting you reliably. Your network's <br />
//                   foundation for today and tomorrow.
//                 </h1>
//                 <p className="text-sm mt-6">
//                   Expert installation and maintenance for dependable connectivity.
//                   High-performance infrastructure, <br />
//                   tailored to your needs, from design to installation.
//                 </p>
//                 <button className="mt-4 px-6 py-2 bg-[#7D0101] text-base cursor-pointer text-white rounded-md">
//                   Connect With Our Experts
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }










// export default function Hero() {
//     return (
//       <section className="bg-cover h-[100vh] bg-center" style={{ backgroundImage: 'url(/hero.png)' }}>
//         <div className="pl-20 pt-89 text-white">
//           <h1 className="text-5xl font-semibold">Connecting you reliably. Your network's <br/>
//             foundation for today and tomorrow.
//           </h1>
//           <p className="text-sm mt-6">Expert installation and maintenance for dependable connectivity.
//             High-performance infrastructure, <br/>
//             tailored to your needs, from design to installation.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-[#7D0101] text-base cursor-pointer text-white rounded-md">
//             Connect With Our Experts
//           </button>
//         </div>
//       </section>
//     );
// };