import PropTypes from 'prop-types';
import { Container, NavBar, Socials } from '..';
import * as st from './MobileMenu.module.css';

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const wrapStat = isMenuOpen ? st.wrapperMenuOpen : st.wrapper;
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

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
