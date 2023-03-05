<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.png';
import Nav from './Nav/Nav';

import styles from "./Header.module.css";

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
=======
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.png';
import Nav from './Nav/Nav';

import styles from "./Header.module.css";

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
>>>>>>> 90d1ffcace57f94e7767c3448206fd5f0c8b7765
