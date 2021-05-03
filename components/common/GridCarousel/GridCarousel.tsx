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

const GridCarousel: React.FC<Props> = ({ banners = [] }) => {
  return (
    <>
      <Swiper
        navigation
        slidesPerView={5.5}
        slidesPerGroup={5}
        spaceBetween={16}
        lazy={{
          loadPrevNext: true,
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url} target="blank">
              <>
                <img data-src={banner.desktop} className="w-full swiper-lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
              </>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GridCarousel;
