import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';
import s from './SlideButton.module.css';

export const SlideButton = ({ prev = false, next = false }) => {
  const swiper = useSwiper();

  return (
    <>
      {prev && (
        <button
          className={s.slidePrevBtn}
          onClick={() => swiper.slidePrev()}
        ></button>
      )}
      {next && (
        <button
          className={s.slideNextBtn}
          onClick={() => swiper.slideNext()}
        ></button>
      )}
    </>
  );
};

SlideButton.propTypes = {
  prev: PropTypes.bool,
  next: PropTypes.bool,
};
