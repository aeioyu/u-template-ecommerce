import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export interface GridCarouselProps {
  className?: string;
}

export interface ItemProps {
  key: string;
}

interface GridCarouselCompose {
  Item: React.FC;
}

const GridCarousel: React.FC<GridCarouselProps> & GridCarouselCompose = ({ className, children, ...rest }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({ slidesPerView: 4, spacing: 15 });
  React.useEffect(() => {
    if (slider) {
      slider.refresh();
    }
  }, [children]);

  return (
    <div className={className} {...rest}>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
    </div>
  );
};

GridCarousel.Item = ({ children }) => <div className="keen-slider__slide">{children}</div>;
GridCarousel.Item.displayName = 'CarouselItem';

export default GridCarousel;
