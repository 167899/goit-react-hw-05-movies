import { NavLink } from 'react-router-dom';

import css from './NavItems.module.css';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const NavItems = () => {
  return (
    <>
      <nav className={css.nav}>
        {navItems.map(({ href, text }) => (
          <NavLink to={href} key={text}>
            {text}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
