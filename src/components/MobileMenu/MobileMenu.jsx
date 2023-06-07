import { NavBar } from '../NavBar/NavBar';
import { Socials } from '../Socials/Socials';
import st from './MobileMenu.module.css';

export const MobileMenu = ({ mobile, mobileOpen }) => {
  const classStat = mobile ? st.isOpen : st.wrapper;
  return (
    <div className={classStat}>
      <NavBar mobileOpen={mobileOpen} />
      <Socials />
    </div>
  );
};
