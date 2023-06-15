import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import { NewsCard, SlideButton } from '@/components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Slider.module.css';

export const Slider = ({ allNews }) => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };
  return (
    <>
      <Swiper
        modules={[Pagination, Mousewheel, Keyboard]}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        rewind={true}
        // loop={true}
        spaceBetween={32}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },

          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {allNews.map(newsContent => (
          <SwiperSlide key={newsContent.id}>
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

Slider.propTypes = {
  allNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      _publishedAt: PropTypes.string.isRequired,
    }),
  ),
};
