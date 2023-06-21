import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';
import s from './SlideButton.module.css';
import classNames from 'classnames';

export const SlideButton = ({ prev = false, next = false, desktop = false }) => {
  const swiper = useSwiper();

  return (
    <>
      {prev && (
        <button
          className={
            desktop ? classNames(s.slidePrevBtn, s.desktop) : s.slidePrevBtn
          }
          onClick={() => swiper.slidePrev()}
        ></button>
      )}
      {next && (
        <button
          className={
            desktop ? classNames(s.slideNextBtn, s.desktop) : s.slideNextBtn
          }
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
