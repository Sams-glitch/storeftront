/* eslint-disable @next/next/no-img-element */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';

function Banner() {
  SwiperCore.use(Autoplay);
  return (
    <div className="h-52 rounded md:h-52 bg-slate-700 w-full mt-4">
      <Swiper slidesPerView={1} autoplay={{}}>
        <SwiperSlide>
          <div className="w-full h-full">
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            fugiat commodi nesciunt quos, iusto inventore ea nobis molestias
            tempore quidem voluptates odit sed accusantium unde animi
            consequuntur quis quisquam sint!Lorem ipsum dolor sit amet
            consectetur adipisicing inventore ea nobis molestias tempore quidem
            voluptates odit sed accusantium unde animi consequuntur quis
            quisquam sint!
            <Link href={'/home'} className="py-5 px-3 bg-red-700">
              Button
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
