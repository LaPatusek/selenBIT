import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.webp';
import styles from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to='/main'>
        <img src={Logo} alt='logo' />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;