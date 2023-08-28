import { HambergerMenu } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuIsVis, setMenuIsVis] = useState(false);
  const [mainPageState, SetMainPageState] = useState(false);
  const { pathname } = useLocation();

  const menuHandler = () => {
    setMenuIsVis((prev) => !prev);
  };

  useEffect(() => {
    if (pathname === '/' || pathname === '/main') {
      SetMainPageState(true);
    } else SetMainPageState(false);
  }, [pathname]);

  return (
    <div
      className={`${styles.header} ${mainPageState ? styles['main-navbar'] : ''}`}
    >
      <NavLink to='/main'>
        <img src={Logo} alt='logo' />
      </NavLink>

      <div className={`${styles.nav}`}>
        <div className={styles['nav-links']}>
          <NavLink
            to='/main'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Strona główna
          </NavLink>
          <NavLink
            to='/szkolenia'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Szkolenia
          </NavLink>
          <NavLink
            to='/cennik'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Cennik
          </NavLink>
          <NavLink
            to='/o-nas'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            O nas
          </NavLink>
          <NavLink
            to='/kontakt'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
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
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                >
                  <li>Strona główna</li>
                </NavLink>

                <NavLink
                  to='/szkolenia'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                >
                  <li>Szkolenia</li>
                </NavLink>

                <NavLink
                  to='/cennik'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                >
                  <li> Cennik </li>
                </NavLink>

                <NavLink
                  to='/o-nas'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                >
                  <li> O nas </li>
                </NavLink>

                <NavLink
                  to='/kontakt'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                >
                  <li>Kontakt </li>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
