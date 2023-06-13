import { Container, NavBar, Socials } from '..';
import * as st from './MobileMenu.module.css';

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const wrapStat = isMenuOpen ? st.wrapperMenuOpen : st.wrapper;
  // const classStat = isMenuOpen ? st.isOpen : st.isClose;
  return (
    <div className={wrapStat}>
      <Container className={st.menu}>
        <NavBar setIsMenuOpen={setIsMenuOpen} />
        <div className={st.social}>
          <Socials component="mobile" />
        </div>
      </Container>
    </div>
  );
};
