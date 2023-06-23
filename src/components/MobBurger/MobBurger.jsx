import Image from 'next/image';
import PropTypes from 'prop-types';
import * as st from './MobBurger.module.css';

export const MobBurger = ({ setIsMenuOpen, isMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button className={st.burger} onClick={handleClick} aria-label="меню">
        {!isMenuOpen && (
          <Image
            src="/icons/menu.svg"
            alt="мобільне меню"
            width="24"
            height="24"
          />
        )}
        {isMenuOpen && (
          <Image
            src="/icons/close.svg"
            alt="закрити мобільне меню"
            width="24"
            height="24"
          />
        )}
      </button>
    </>
  );
};

MobBurger.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
