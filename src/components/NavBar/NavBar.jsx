import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import navPaths from 'utils/navPaths.json';
import * as st from './NavBar.module.css';
import fs from './FooterNavBar.module.css';

export const NavBar = ({ setIsMenuOpen, footerVariant = false }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const router = useRouter();
  const currentPath = router.pathname;
  const handleClick = () => {
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };
  return (
    <nav className={footerVariant ? '' : st.nav}>
      <ul className={footerVariant ? fs.navList : st.list}>
        {navPaths?.map(item => {
          return (
            <li key={item.id}>
              {footerVariant && (
                <Link
                  href={item.route}
                  className={
                    currentPath === item.route ? fs.linkActive : fs.link
                  }
                  aria-label={item.title}
                  onClick={handleClick}
                >
                  {item.title}
                </Link>
              )}
              {!footerVariant && (
                <Link
                  href={item.route}
                  className={
                    currentPath === item.route ? st.linkActive : st.link
                  }
                  aria-label={item.title}
                  onClick={handleClick}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  setIsMenuOpen: PropTypes.func,
  footerVariant: PropTypes.bool,
};
