import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { lock, unlock, clearBodyLocks } from 'tua-body-scroll-lock';
import { Container, Logo, NavBar, MobBurger, MobileMenu } from '@/components';
import * as st from './Header.module.css';

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const [isNavBarRendered, setIsNavBarRendered] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setIsNavBarRendered(true);
      setIsMenuRendered(false);
    } else {
      setIsNavBarRendered(false);
      setIsMenuRendered(true);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (isMenuOpen) lock();
    else {
      unlock();
      clearBodyLocks();
    }
  }, [isMenuOpen]);

  return (
    <header className={st.header}>
      <Container className={st.headerBox}>
        <Logo />
        {isNavBarRendered && <NavBar setIsMenuOpen={setIsMenuOpen} />}
        {isMenuRendered && (
          <MobBurger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        )}
        {isMenuRendered && (
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </Container>
    </header>
  );
};
