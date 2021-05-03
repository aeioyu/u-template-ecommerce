import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  banners: {
    id: string;
    desktop: string;
    mobile?: string;
    url?: string;
  }[];
}

const HeroBanner: React.FC<Props> = ({ banners = [] }) => {
  return (
    <>
      <Swiper
        loop
        navigation
        lazy={{
          loadPrevNext: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url} target="blank">
              {idx === 0 ? (
                <img src={banner.desktop} className="w-full" />
              ) : (
                <>
                  <img data-src={banner.desktop} className="w-full swiper-lazy" />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </>
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
