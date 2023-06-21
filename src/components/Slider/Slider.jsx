import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import { useInView } from 'react-intersection-observer';
import { NewsCard, SlideButton, Spinner } from '@/components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Slider.module.css';

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return hydration ? children : <Spinner />;
};

export const Slider = ({ allNews }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [showPagination, setShowPagination] = useState(false);
  const [showDesktopButtons, setShowDesktopButtons] = useState(false);
  useEffect(() => {
    if (isMobile) setShowPagination(true);
    else setShowPagination(false);

    if (isDesktop) setShowDesktopButtons(true);
    else setShowDesktopButtons(false);
  }, [isMobile, isDesktop]);
  
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };
  return (
    <div ref={ref}>
      {inView && (
        <Hydrated>
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
            <div
              className={
                showDesktopButtons
                  ? s.swiperSlideButtonsDesktop
                  : s.swiperSlideButtons
              }
            >
              <SlideButton prev desktop={showDesktopButtons} />
              <SlideButton next desktop={showDesktopButtons} />
            </div>
          </Swiper>
        </Hydrated>
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
