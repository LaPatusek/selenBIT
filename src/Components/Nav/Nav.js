import { Star1 } from 'iconsax-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuIsVis, setMenuIsVis] = useState(false);
  const [mainPageState, SetMainPageState] = useState(false);
  const { pathname } = useLocation();
  const linkRefOne = useRef();
  const linkRefTwo = useRef();
  const linkRefThree = useRef();
  const linkRefFour = useRef();
  const linkRefFive = useRef();

  const menuHandler = () => {
    setMenuIsVis((prev) => !prev);
  };

  useEffect(() => {
    if (menuIsVis) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuIsVis) {
      document.body.style.overflowY = 'scroll';
    }

    if (menuIsVis) {
      const linkOne = linkRefOne?.current;
      const linkTwo = linkRefTwo?.current;
      const linkThree = linkRefThree?.current;
      const linkFour = linkRefFour?.current;
      const linkFive = linkRefFive?.current;
      setTimeout(() => {
        linkOne.classList.toggle(styles['aktywne']);
        linkTwo.classList.toggle(styles['aktywne']);
        linkThree.classList.toggle(styles['aktywne']);
        linkFour.classList.toggle(styles['aktywne']);
        linkFive.classList.toggle(styles['aktywne']);
      }, 200);
    }
  }, [menuIsVis]);

  useEffect(() => {
    if (pathname === '/' || pathname === '/main') {
      SetMainPageState(true);
    } else SetMainPageState(false);
  }, [pathname]);

  return (
    <Fragment>
      <div
        className={`${styles.header} ${
          mainPageState ? styles['main-navbar'] : ''
        }`}
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
        </div>
      </div>
      <div
        className={`${styles['navbar-800']} ${
          menuIsVis ? styles['active-menu-800'] : ''
        }`}
      >
        <img src={Logo} alt='logo' />

        <div className={styles['hamburger-menu-icon']} onClick={menuHandler}>
          <Star1 size='32' variant='Bold' />
        </div>

        {menuIsVis && (
          <div className={`${styles['nav-menu-800']}`}>
            <ul>
              <li>
                <NavLink
                  to='/main'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                  ref={linkRefOne}
                >
                  Strona główna
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/szkolenia'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                  ref={linkRefTwo}
                >
                  szkolenia
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/cennik'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                  ref={linkRefThree}
                >
                  Cennik
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/o-nas'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                  ref={linkRefFour}
                >
                  O nas
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/kontakt'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={menuHandler}
                  ref={linkRefFive}
                >
                  kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Nav;
