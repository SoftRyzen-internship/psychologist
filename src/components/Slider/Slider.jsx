import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import { useInView } from 'react-intersection-observer';
import { NewsCard, SlideButton } from '@/components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Slider.module.css';

export const Slider = ({ allNews }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [showPagination, setShowPagination] = useState(false);
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  useEffect(() => {
    if (isMobile) setShowPagination(true);
    else setShowPagination(false);

    if (isDesktop) setShowExtraButtons(true);
    else setShowExtraButtons(false);
  }, [isMobile, isDesktop]);
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };
  return (
    <div ref={ref}>
      {inView && (
        <Swiper
          // wrapperClass="news-swiper-wrapper"
          modules={[Pagination, Mousewheel, Keyboard]}
          pagination={showPagination ? pagination : false}
          mousewheel={true}
          keyboard={true}
          rewind={true}
          spaceBetween={32}
          lazy={{
            enabled: true,
            loadPrevNext: true,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: true,
          }}
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
          {showExtraButtons && (
            <div className={s.swiperSlideButtonsDesktop}>
              <SlideButton prev desktop />
              <SlideButton next desktop />
            </div>
          )}
          <div className={s.swiperSlideButtons}>
            <SlideButton prev />
            <SlideButton next />
          </div>
        </Swiper>
      )}
    </div>
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
