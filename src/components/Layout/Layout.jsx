import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {

  return (
    <div
      className={css.layout}
    >
      <Header />
      <Outlet/>
    </div>
  );
};