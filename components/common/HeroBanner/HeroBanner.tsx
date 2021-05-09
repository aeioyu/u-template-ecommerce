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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url} target="blank">
              <picture>
                <source srcSet={banner.desktop} media="(min-width: 768px)" />
                <source srcSet={banner.mobile} media="(min-width: 767px)" />
                <img
                  src={banner.mobile}
                  loading="lazy"
                  alt="this is alt"
                  className="w-full"
                  width="1264"
                  height="440"
                  style={{ aspectRatio: '1264 / 440' }}
                />
              </picture>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
