import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Autoplay, Lazy, Navigation, Pagination } from 'swiper/core';

const Swiper = {
  init: (): void => {
    SwiperCore.use([Lazy, Pagination, Navigation, Autoplay]);
  },
};

export default Swiper;
