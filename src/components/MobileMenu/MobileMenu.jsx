import { Container } from '..';
import { NavBar } from '../NavBar/NavBar';
import { Socials } from '../Socials/Socials';
import * as st from './MobileMenu.module.css';

export const MobileMenu = ({ mobile, mobileOpen }) => {
  const classStat = mobile ? st.isOpen : st.wrapper;
  return (
    <Container className={classStat}>
      <NavBar mobileOpen={mobileOpen} />
      <Socials />
    </Container>
  );
};
