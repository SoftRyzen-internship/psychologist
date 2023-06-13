import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import s from './Slider.module.css';

import { Pagination, Mousewheel, Keyboard } from 'swiper';
import { NewsCard, SlideButton } from '@/components';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';


export const Slider = ({ allNews }) => {
  const isBreakPoint = useMediaQuery(768);
  console.log(isBreakPoint);
  
  const pagination = {
    clickable: true,
    dynamicBullets: true
  };
  return (
    <>
      <Swiper
        // rewind={true}
        loop={true}
        // cssMode={true}
        pagination={pagination}
        // mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        // breakpoints={{
        //   768: {
        //     pagination: false
        //   },
          
        //   1280: {
        //     pagination: false
        // } }}
      >
        {allNews.map(newsContent => (
          <SwiperSlide
            key={newsContent.id}
            //   virtualIndex={index}
          >
            <NewsCard
              image={newsContent.image}
              title={newsContent.title}
              text={newsContent.text}
            />
          </SwiperSlide>
        ))}
        <div className={s.swiperSlideButtons}>
          <SlideButton prev />
          <SlideButton next />
        </div>
      </Swiper>
    </>
  );
};
