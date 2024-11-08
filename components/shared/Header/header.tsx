"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import { Navbar } from "./navbar";
import { Button, Input } from "@/components/ui";




import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  className?: string,
}

export const Header: React.FC<Props> = ({ className }) => {
  const swiperRef = useRef<any>(null);
  return (
    <div className={`${className} relative`}>

      <div className="absolute top-[130px] z-[-1]">
        <Image src="/images/item.png"
          width={187}
          height={187}
          alt="Picture of the author" />
      </div>


      {/* input */}
      <div className="max-w-[1470px] w-full pr-[15px] pl-[15px] mx-auto items-center flex justify-between">
        <div className="max-w-[921px]  w-full">
          <h1 className="text-[#434242] text-[80px] leading-[100px] font-bold">Предлагаем только качественные <span className="text-[#4BA9FF]">запчасти</span> для иномарок</h1>
          <div className="flex items-center mt-[50px] gap-[32px]">
            <Button customClass=" text-[#fff] text-[24px] max-w-[470px] w-full min-h-[100px] gradient-bg">Посмотреть каталог</Button>
            <p className="text-2xl text-[#000] font-light">Более 50 товаров</p>
          </div>
        </div>

        <div className="max-w-[500px] flex flex-row-reverse items-end">
          <Swiper
            pagination={{ type: "fraction" }}
            navigation={false} // Отключаем стандартные кнопки
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src="/images/wheel.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className='h-[500px] object-cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/wheel2.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className='h-[500px] object-cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/wheel3.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className='h-[500px] object-cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/wheel4.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className='h-[500px] object-cover'
              />
            </SwiperSlide>

          </Swiper>

          {/* Контейнер для кнопок */}
          <div className="custom-navigation">
            <button className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronLeft className='icon' size={25} />
            </button>
            <button className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
              <ChevronRight className='icon' size={25} />
            </button>
          </div>
        </div>


      </div>

      <div className='flex max-w-[1470px] w-full pr-[15px] pl-[15px] mx-auto gap-[15px] mt-[56px]'>
        <Button customClass='max-w-[470px] w-full min-h-[105px] text-[#FFF] text-[30px] hover:bg-[#4BA9FF] bg-[#4BA9FF]'>Высокое качество</Button>
        <Button customClass='max-w-[470px] w-full min-h-[105px] text-[#FFF] text-[30px] hover:bg-[#4BA9FF] bg-[#4BA9FF]'>Лучшие на рынке</Button>
        <Button customClass='max-w-[470px] w-full min-h-[105px] text-[#FFF] text-[30px] hover:bg-[#4BA9FF] bg-[#4BA9FF]'>Большой выбор</Button>
      </div>


    </div>
  )
}