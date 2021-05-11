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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url} target="blank">
              <Image
                src={banner.mobile}
                alt={`hero banner ${banner.id}`}
                className="w-full"
                width="1264"
                height="440"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
