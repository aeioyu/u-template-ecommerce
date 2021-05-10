import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

const flickityOptions = {
  initialIndex: 0,
};

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
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        {banners.map((banner) => (
          <div style={{ width: '100%' }} key={banner.id}>
            <a href={banner.url} target="blank">
              <picture>
                <source srcSet={banner.desktop} media="(min-width: 768px)" />
                <source srcSet={banner.mobile} media="(min-width: 767px)" />
                <img
                  src={banner.mobile}
                  loading="lazy"
                  alt={`hero banner ${banner.id}`}
                  className="w-full"
                  width="1264"
                  height="440"
                  style={{ aspectRatio: '1264 / 440' }}
                />
              </picture>
            </a>
          </div>
        ))}
      </Flickity>
    </>
  );
};

export default HeroBanner;
