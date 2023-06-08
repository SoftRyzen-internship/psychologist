import { routes } from 'routes';
import Image from 'next/image';
import * as st from './Logo.module.css';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className={st.logo}>
      <Link href={routes.HOME}>
        <Image
          src="/icons/logoHeader.svg"
          alt="Logo"
          width={60}
          height={40}
          className={st.logoIcon}
        />
      </Link>
    </div>
  );
};
