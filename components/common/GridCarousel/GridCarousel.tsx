import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

export interface GridCarouselProps {
  className?: string;
}

export interface ItemProps {
  key: string;
}

interface GridCarouselCompose {
  Item: React.FC;
}

const flickityOptions = {
  pageDots: false,
  cellAlign: 'left',
};

const GridCarousel: React.FC<GridCarouselProps> & GridCarouselCompose = ({ className, children, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        {children}
      </Flickity>
    </div>
  );
};

GridCarousel.Item = ({ children }) => <div style={{ width: '25%', marginRight: 15 }}>{children}</div>;
GridCarousel.Item.displayName = 'CarouselItem';

export default GridCarousel;
