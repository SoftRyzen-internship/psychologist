import { usePathname } from 'next/navigation';
import Link from 'next/link';
import * as st from './NavBar.module.css';
import navPaths from '../../utils/navPaths.json';

export const NavBar = ({ mobileOpen }) => {
  const currentPath = usePathname();
  return (
    <>
      <ul className={st.list}>
        {navPaths?.map(item => {
          return (
            <li key={item.id}>
              <Link
                href={item.route}
                className={currentPath === item.route ? st.linkActive : st.link}
                onClick={() => mobileOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
