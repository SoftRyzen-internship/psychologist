import { Container } from '..';
import { NavBar } from '../NavBar/NavBar';
import { Socials } from '../Socials/Socials';
import * as st from './MobileMenu.module.css';

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const wrapStat = isMenuOpen ? st.wrapperMenuOpen : st.wrapper;
  const classStat = isMenuOpen ? st.isOpen : st.isClose;
  return (
    <div className={wrapStat}>
      <Container className={classStat}>
        <NavBar setIsMenuOpen={setIsMenuOpen} />
        <Socials />
      </Container>
    </div>
  );
};
