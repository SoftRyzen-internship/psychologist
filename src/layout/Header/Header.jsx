import { Container } from '@/components';
import { Logo } from '@/components/Logo/Logo';
import st from './Header.module.css';
import { NavBar } from '@/components/NavBar/NavBar';
import { MobBurger } from '@/components/MobBurger/MobBurger';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const mobileOpen = stat => {
    setMobile(stat);
  };
  return (
    <header className={st.header}>
      <Container>
        <div className={st.headerBox}>
          <Logo />
          <div className={st.nav}>
            <NavBar mobileOpen={mobileOpen} />
          </div>
          <MobBurger mobileOpen={mobileOpen} mobile={mobile} />
        </div>
        <MobileMenu mobile={mobile} mobileOpen={mobileOpen} />
      </Container>
    </header>
  );
};
