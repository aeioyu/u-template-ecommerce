import React from 'react';
import { SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface GridCarouselProps {
  className?: string;
  swiperOptions?: SwiperOptions;
}

export interface ItemProps {
  key: string;
}

interface GridCarouselCompose {
  Item: React.FC<SwiperSlide>;
}

const GridCarousel: React.FC<GridCarouselProps> & GridCarouselCompose = ({
  className,
  swiperOptions,
  children,
  ...rest
}) => {
  return (
    <div className={className} {...rest}>
      <Swiper
        navigation
        slidesPerView={5.5}
        slidesPerGroup={5}
        spaceBetween={16}
        lazy={{
          loadPrevNext: true,
        }}
        {...swiperOptions}
      >
        {children}
      </Swiper>
    </div>
  );
};

GridCarousel.Item = SwiperSlide;

export default GridCarousel;
