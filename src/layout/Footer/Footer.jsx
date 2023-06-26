import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { Container, NavBar, Socials } from '@/components';
import LogoIcon from 'public/icons/logoFooter.svg';
import s from './Footer.module.css';

export const Footer = () => {
  const [isTablet, setIsTablet] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  const isTabletSize = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    setIsTablet(isTabletSize);
    setIsDesktop(isDesktopSize);
  }, [isTabletSize, setIsTablet, setIsDesktop, isDesktopSize]);

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          {!isTablet && !isDesktop && (
            <>
              <LogoIcon className={s.logo} />

              <NavBar footerVariant />

              <Socials component="footer" />
              <p className={s.developmentYear}>Юлія Сулаєва &#169; 2023</p>
            </>
          )}

          {isTablet && !isDesktop && (
            <>
              <div className={s.mainTabletWrapper}>
                <div className={s.tabletWrappers}>
                  <LogoIcon className={s.logo} />
                  <Socials component="footer" />
                </div>

                <div className={s.tabletWrappers}>
                  <NavBar footerVariant />
                </div>
              </div>
              <p className={s.developmentYear}>Юлія Сулаєва &#169; 2023</p>
            </>
          )}

          {isDesktop && (
            <>
              <div className={s.desktopWrapper}>
                <LogoIcon className={s.logo} />

                <div className={s.desktopNavWrapper}>
                  <NavBar footerVariant />
                </div>
                <Socials component="footer" />
              </div>

              <p className={s.developmentYear}>Юлія Сулаєва &#169; 2023</p>
            </>
          )}
        </div>
      </Container>
    </footer>
  );
};
