import Image from 'next/image';
import * as st from './MobBurger.module.css';

export const MobBurger = ({ setIsMenuOpen, isMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button className={st.burger} onClick={handleClick}>
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
