import { NavItems } from 'components/NavItems/NavItems';
import css from './Header.module.css';
// import PropTypes from 'prop-types';

export const Header = () => {
  return (
    <div className={css.header}>
     <NavItems/>
    </div>
  );
};

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };