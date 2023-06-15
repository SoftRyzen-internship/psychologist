import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Container } from '@/components';
import navPaths from 'utils/navPaths.json';
import socials from 'utils/socials.json';
import LogoIcon from 'public/icons/logoFooter.svg';
import FacebookIcon from 'public/icons/facebook.svg';
import TelegramIcon from 'public/icons/telegram.svg';
import YoutubeIcon from 'public/icons/Youtube.svg';
import InstagramIcon from 'public/icons/instagram.svg';

import s from './Footer.module.css';

export const Footer = () => {
  const [isTablet, setIsTablet] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  const router = useRouter();

  const currentPath = router.pathname;

  const isTabletSize = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    setIsTablet(isTabletSize);
    setIsDesktop(isDesktopSize);
  }, [isTabletSize, setIsTablet, setIsDesktop, isDesktopSize]);

  const serveIcon = iconName => {
    const lowCaseIconName = iconName.toLowerCase();
    if (lowCaseIconName === 'telegram') {
      return <TelegramIcon className={s.imgIcon} />;
    } else if (lowCaseIconName === 'youtube') {
      return <YoutubeIcon className={s.imgIcon} />;
    } else if (lowCaseIconName === 'facebook') {
      return <FacebookIcon className={s.imgIcon} />;
    } else if (lowCaseIconName === 'instagram') {
      return <InstagramIcon className={s.imgIcon} />;
    }
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          {!isTablet && !isDesktop && (
            <>
              <LogoIcon className={s.logo} />

              <nav>
                <ul className={s.navList}>
                  {navPaths?.map(path => (
                    <li key={path.id}>
                      <Link
                        href={path.route}
                        className={
                          currentPath === path.route ? s.linkActive : s.link
                        }
                      >
                        {path.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <ul className={s.socialList}>
                {socials.map(social => (
                  <li key={social.name}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {serveIcon(social.name)}
                    </a>
                  </li>
                ))}
              </ul>

              <p className={s.developmentYear}>2023 &#169;</p>
            </>
          )}
          {isTablet && !isDesktop && (
            <>
              <div className={s.mainTabletWrapper}>
                <div className={s.tabletWrappers}>
                  <LogoIcon className={s.logo} />

                  <ul className={s.socialList}>
                    {socials.map(social => (
                      <li key={social.name}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {serveIcon(social.name)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={s.tabletWrappers}>
                  <nav>
                    <ul className={s.navList}>
                      {navPaths?.map(path => (
                        <li key={path.id}>
                          <Link
                            href={path.route}
                            className={
                              currentPath === path.route ? s.linkActive : s.link
                            }
                          >
                            {path.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <p className={s.developmentYear}>2023 &#169;</p>
            </>
          )}
          {isDesktop && (
            <>
              <div className={s.desktopWrapper}>
                <LogoIcon className={s.logo} />

                <div className={s.desktopNavWrapper}>
                  <nav>
                    <ul className={s.navList}>
                      {navPaths?.map(path => (
                        <li key={path.id}>
                          <Link
                            href={path.route}
                            className={
                              currentPath === path.route ? s.linkActive : s.link
                            }
                          >
                            {path.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <ul className={s.socialList}>
                  {socials.map(social => (
                    <li key={social.name}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {serveIcon(social.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={s.developmentYear}>2023 &#169;</p>
            </>
          )}
        </div>
      </Container>
    </footer>
  );
};
