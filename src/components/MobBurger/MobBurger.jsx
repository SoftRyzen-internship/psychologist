import Image from 'next/image';
import * as st from './MobBurger.module.css';

export const MobBurger = ({ mobileOpen, mobile }) => {
  return (
    <>
      <button className={st.burger} onClick={() => mobileOpen(!mobile)}>
        {!mobile && (
          <Image
            src="/icons/menu.svg"
            alt="mobile menu"
            width="36"
            height="36"
          />
        )}
        {mobile && (
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
