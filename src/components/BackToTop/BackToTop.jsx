import React, { useState, useEffect, useRef } from 'react';
import BackToTopF from 'public/icons/backtotop.svg';
import s from './BackToTop.module.css';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    buttonRef.current.blur();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`${s.backToTopButton} ${isVisible ? s.visible : ''}`}
      onClick={scrollToTop}
    >
      <BackToTopF className={s.svg} />
    </button>
  );
};
