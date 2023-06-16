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
            alt="mobile menu"
            width="36"
            height="36"
          />
        )}
        {isMenuOpen && (
          <Image
            src="/icons/menuX.svg"
            alt="mobile menu"
            width="36"
            height="36"
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
