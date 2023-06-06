import Link from 'next/link';
import { routes } from 'routes';
import NextSVG from 'public/next.svg';
import s from './FirstComponent.module.css';

export const FirstComponent = () => {
  return (
    <>
      <p>Перший компонент</p>
      <NextSVG className={s.svg} />

      <Link href={routes.CONSULTATIONS} className={s.link}>
        Page Consultations
      </Link>
    </>
  );
};
