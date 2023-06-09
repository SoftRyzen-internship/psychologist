import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@/components';
import { Logo } from '@/components/Logo/Logo';
import * as st from './Header.module.css';
import { NavBar } from '@/components/NavBar/NavBar';
import { MobBurger } from '@/components/MobBurger/MobBurger';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={st.header}>
      <Container className={st.headerBox}>
        <Logo />
        {isDesktop && <NavBar setIsMenuOpen={setIsMenuOpen} />}
        {!isDesktop && (
          <MobBurger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        )}
        {!isDesktop && (
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </Container>
    </header>
  );
};
