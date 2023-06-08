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
  const [mobile, setMobile] = useState(false);
  const mobileOpen = stat => {
    setMobile(stat);
  };
  return (
    <header className={st.header}>
      <Container className={st.headerBox}>
        <Logo />
        {isDesktop && <NavBar mobileOpen={mobileOpen} />}
        {!isDesktop && <MobBurger mobileOpen={mobileOpen} mobile={mobile} />}
        {!isDesktop && <MobileMenu mobile={mobile} mobileOpen={mobileOpen} />}
      </Container>
    </header>
  );
};
