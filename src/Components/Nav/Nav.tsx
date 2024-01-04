import { Star1 } from 'iconsax-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/cropped-logo11-300x147.webp';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [menuIsVis, setMenuIsVis] = useState<boolean>(false);
  const [mainPageState, SetMainPageState] = useState<boolean>(false);
  const { pathname } = useLocation();
  const linkRefOne = useRef<HTMLAnchorElement>(null);
  const linkRefTwo = useRef<HTMLAnchorElement>(null);
  const linkRefThree = useRef<HTMLAnchorElement>(null);
  const linkRefFour = useRef<HTMLAnchorElement>(null);
  const linkRefFive = useRef<HTMLAnchorElement>(null);

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
      const linkOne = linkRefOne?.current!;
      const linkTwo = linkRefTwo?.current!;
      const linkThree = linkRefThree?.current!;
      const linkFour = linkRefFour?.current!;
      const linkFive = linkRefFive?.current!;
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
        <Link to='/'>
          <img src={Logo} alt='logo' width='auto' height={'127px'} />
        </Link>

        <div className={`${styles.nav}`}>
          <div className={styles['nav-links']}>
            <Link to='/'>Strona główna</Link>
            <Link to='/szkolenia'>Szkolenia</Link>
            <Link to='/cennik'>Cennik</Link>
            <Link to='/o-nas'>O nas</Link>
            <Link to='/kontakt'>Kontakt</Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles['navbar-800']} ${
          menuIsVis ? styles['active-menu-800'] : ''
        }`}
      >
        <img src={Logo} alt='logo' height={'147px'} width={'300px'} />

        <div className={styles['hamburger-menu-icon']} onClick={menuHandler}>
          <Star1 size='32' variant='Bold' />
        </div>

        {menuIsVis && (
          <div className={`${styles['nav-menu-800']}`}>
            <ul>
              <li>
                <Link to='/main' onClick={menuHandler} ref={linkRefOne}>
                  Strona główna
                </Link>
              </li>

              <li>
                <Link to='/szkolenia' onClick={menuHandler} ref={linkRefTwo}>
                  szkolenia
                </Link>
              </li>

              <li>
                <Link to='/cennik' onClick={menuHandler} ref={linkRefThree}>
                  Cennik
                </Link>
              </li>

              <li>
                <Link to='/o-nas' onClick={menuHandler} ref={linkRefFour}>
                  O nas
                </Link>
              </li>

              <li>
                <Link to='/kontakt' onClick={menuHandler} ref={linkRefFive}>
                  kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Nav;
