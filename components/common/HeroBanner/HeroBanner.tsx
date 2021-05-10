import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Props {
  banners: {
    id: string;
    desktop: string;
    mobile?: string;
    url?: string;
  }[];
}

const HeroBanner: React.FC<Props> = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {banners.map((banner) => (
            <div className="keen-slider__slide" key={banner.id}>
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
        </div>
        {/* {slider && (
          <>
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )} */}
      </div>
    </>
  );
};

export default HeroBanner;
