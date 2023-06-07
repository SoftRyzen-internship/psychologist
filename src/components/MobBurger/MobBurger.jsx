import Image from 'next/image';
import st from './MobBurger.module.css';

export const MobBurger = ({ mobileOpen, mobile }) => {
  return (
    <>
      <div className={st.burger}>
        {!mobile && (
          <Image
            src="/icons/menu.svg"
            alt="mobile menu"
            width="36"
            height="36"
            onClick={() => mobileOpen(true)}
          />
        )}
        {mobile && (
          <Image
            src="/icons/menuX.svg"
            alt="mobile menu"
            width="36"
            height="36"
            onClick={() => mobileOpen(false)}
          />
        )}
      </div>
    </>
  );
};
