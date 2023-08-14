import { HambergerMenu } from 'iconsax-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuIsVis, setMenuIsVis] = useState(false);

  const menuHandler = () => {
    setMenuIsVis((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles['nav-links']}>
        <NavLink to='/main' activeClassName={styles.active}>
          Strona główna
        </NavLink>
        <NavLink to='/szkolenia' activeClassName={styles.active}>
          Szkolenia
        </NavLink>
        <NavLink to='/cennik' activeClassName={styles.active}>
          Cennik
        </NavLink>
        <NavLink to='/o-nas' activeClassName={styles.active}>
          O nas
        </NavLink>
        <NavLink to='/kontakt' activeClassName={styles.active}>
          Kontakt
        </NavLink>
      </div>
      <div className={styles['nav-menu']}>
        <div className={styles['hamburger-menu-icon']} onClick={menuHandler}>
          <HambergerMenu size='32' />
        </div>

        {menuIsVis && (
          <div className={styles['nav-menu-800']}>
            <ul>
              <NavLink
                to='/main'
                activeClassName={styles.active}
                onClick={menuHandler}
              >
                <li>Strona główna</li>
              </NavLink>

              <NavLink
                to='/szkolenia'
                activeClassName={styles.active}
                onClick={menuHandler}
              >
                <li>Szkolenia</li>
              </NavLink>

              <NavLink
                to='/cennik'
                activeClassName={styles.active}
                onClick={menuHandler}
              >
                <li> Cennik </li>
              </NavLink>

              <NavLink
                to='/o-nas'
                activeClassName={styles.active}
                onClick={menuHandler}
              >
                <li> O nas </li>
              </NavLink>

              <NavLink
                to='/kontakt'
                activeClassName={styles.active}
                onClick={menuHandler}
              >
                <li>Kontakt </li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
