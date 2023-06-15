import React, { useState, useEffect } from 'react';
import BackToTopF from '../../../public/icons/TestVectorFull.svg';
import s from './BackToTop.module.css';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${s.backToTopButton} ${isVisible ? s.visible : ''}`}
      // style={{
      //   display: isVisible ? 'block' : 'none',
      // }}
      // style={{
      //   transition: 'opacity 0.3s ease',
      //   opacity: isVisible ? 1 : 0,
      // }}
      onClick={scrollToTop}
    >
      <BackToTopF className={s.svg} />
    </button>
  );
};
