import Link from 'next/link';
import { routes } from 'routes';
import LogoIcon from 'public/icons/logoHeader.svg';
import * as st from './Logo.module.css';

export const Logo = () => {
  return (
    <Link href={routes.HOME} aria-label="логотип">
      <LogoIcon className={st.logo} />
    </Link>
  );
};
