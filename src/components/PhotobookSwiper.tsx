import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import photo1 from '../assets/images/image_1.png'
import photo2 from '../assets/images/image_2.png'
import photo3 from '../assets/images/image_3.png'
import photo4 from '../assets/images/image_4.png'
import photo5 from '../assets/images/image_5.png'
import photo6 from '../assets/images/image_6.png'
import photo7 from '../assets/images/image_7.png'
import photo8 from '../assets/images/image_8.png'
import photo9 from '../assets/images/image_9.png'
import photo10 from '../assets/images/image_10.png'
import photo11 from '../assets/images/image_11.png'
import photo12 from '../assets/images/image_12.png'
import photo13 from '../assets/images/image_13.png'
import leftButtonUrl from '../assets/images/leftButton.png'
import rightButtonUrl from '../assets/images/rightButton.png'


const PhotobookSwiper = () => {
  const photoList = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13]

  return (
    <Swiper
    modules={[Pagination, Navigation]}
      className='w-screen'
      slidesPerView={1} // 한 슬라이더 당 보여져야하는 슬라이드 갯수
      pagination={{
        type: 'fraction',
      }}
      navigation={{
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      }}
    >
      {photoList.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
      <button className="custom-next-button">
        <img src={rightButtonUrl} />
      </button>
      <button className="custom-prev-button">
        <img src={leftButtonUrl} />
      </button>
    </Swiper>
  );
};

export default PhotobookSwiper;