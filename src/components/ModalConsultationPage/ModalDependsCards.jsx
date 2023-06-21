import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CloseBtn from 'public/icons/closeButton.svg';
import s from './Modal.module.css';

export const ModalDependsCards = ({ data, onClose }) => {
  const body = document.querySelector('body');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  const handleOverlayClick = event => {
    const isOverlayClick = event.target.classList.contains(s.overlay);
    const isModalWrapperClick = event.target.classList.contains(
      s.mainModalWrapper,
    );

    if (isOverlayClick || isModalWrapperClick) {
      handleClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const overlay = document.querySelector(`.${s.overlay}`);
      const mainModalWrapper = document.querySelector(`.${s.mainModalWrapper}`);

      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      body.classList.add(s.noScroll);
      overlay.classList.add(s.open);
      mainModalWrapper.classList.add(s.open);

      document.addEventListener('keydown', handleKeyDown);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []); //eslint-disable-line

  const handleClose = () => {
    const overlay = document.querySelector(`.${s.overlay}`);
    const mainModalWrapper = document.querySelector(`.${s.mainModalWrapper}`);

    mainModalWrapper.classList.remove(s.open);
    overlay.classList.remove(s.open);
    body.classList.remove(s.noScroll);

    smoothScrollTo(scrollPosition);
    document.removeEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div className={s.mainModalWrapper} onClick={handleOverlayClick}>
        <div className={classNames(s.modalWrapper)}>
          <button className={s.closeButton} onClick={handleClose}>
            <CloseBtn className={s.closeVector} aria-label="Кнопка закриття" />
          </button>
          <ReactMarkdown>{data.title}</ReactMarkdown>
          <div className={s.contentWrapper}>
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className={classNames(s.overlay)} onClick={handleOverlayClick} />
    </>
  );
};

ModalDependsCards.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

/**
  |============================
  | Internet function comeback smooth
  |============================
*/

const smoothScrollTo = targetPosition => {
  const duration = 5;
  const start = window.pageYOffset;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += 1 / 60; // 60 FPS

    const ease = Math.sin((currentTime / duration) * (Math.PI / 2));
    const newPosition = ease * (targetPosition - start) + start;

    window.scrollTo(0, newPosition);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};
