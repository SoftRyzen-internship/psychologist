import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CloseBtn from 'public/icons/closeButton.svg';
import s from './Modal.module.css';

export const Modal = ({ data, onClose }) => {
  const body = document.querySelector('body');

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const overlay = document.querySelector(`.${s.overlay}`);
      const modalWrapper = document.querySelector(`.${s.modalWrapper}`);

      body.classList.add(s.noScroll);
      overlay.classList.add(s.open);
      modalWrapper.classList.add(s.open);

      document.addEventListener('keydown', handleKeyDown);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []); //eslint-disable-line

  const handleClose = () => {
    const overlay = document.querySelector(`.${s.overlay}`);
    overlay.classList.remove(s.open);
    body.classList.remove(s.noScroll);

    document.removeEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div className={classNames(s.overlay)}>
        <div className={classNames(s.modalWrapper)}>
          <button className={s.closeButton} onClick={handleClose}>
            <CloseBtn className={s.closeVector} aria-label="close button" />
          </button>
          <ReactMarkdown>{data.title}</ReactMarkdown>
          <div className={s.contentWrapper}>
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
