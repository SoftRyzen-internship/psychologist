import { routes } from 'routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import st from './NavBar.module.css';

export const NavBar = ({ mobileOpen }) => {
  const currentPath = usePathname();
  return (
    <>
      <ul className={st.list}>
        <li>
          <Link
            href={routes.HOME}
            className={currentPath === routes.HOME ? st.linkActive : st.link}
            onClick={() => mobileOpen(false)}
          >
            Головна
          </Link>
        </li>
        <li>
          <Link
            href={routes.CONSULTATIONS}
            className={
              currentPath === routes.CONSULTATIONS ? st.linkActive : st.link
            }
            onClick={() => mobileOpen(false)}
          >
            Індивідуальні консультації
          </Link>
        </li>
        <li>
          <Link
            href={routes.TRAININGS}
            className={
              currentPath === routes.TRAININGS ? st.linkActive : st.link
            }
            onClick={() => mobileOpen(false)}
          >
            Тренінги
          </Link>
        </li>
        <li>
          <Link
            href={routes.SEE_FAR_CBT}
            className={
              currentPath === routes.SEE_FAR_CBT ? st.linkActive : st.link
            }
            onClick={() => mobileOpen(false)}
          >
            See Far CBT
          </Link>
        </li>
        <li>
          <Link
            href={routes.NEWS}
            className={currentPath === routes.NEWS ? st.linkActive : st.link}
            onClick={() => mobileOpen(false)}
          >
            Новини
          </Link>
        </li>
      </ul>
    </>
  );
};
