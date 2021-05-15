import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';

SwiperCore.use([Thumbs]);

export interface ProductGalleryProps {
  gallery: {
    url: string;
    id: string;
    alt: string;
  }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="mb-2">
        <Swiper
          style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper, autoScrollOffset: 1 }}
          className="mySwiper2"
        >
          {gallery?.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={false}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper"
        allowTouchMove={false}
        navigation={true}
      >
        {gallery?.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
