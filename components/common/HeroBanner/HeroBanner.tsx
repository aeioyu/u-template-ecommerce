import Image from 'next/image';
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
        lazy
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
                <Image src={banner.desktop} className="w-full" alt="normal banner" width={1400} height={350} />
              ) : (
                <>
                  <Image src={banner.desktop} className="w-full" alt="normal banner" width={1400} height={350} />
                  {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white" /> */}
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
