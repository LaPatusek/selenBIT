import { HambergerMenu } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react';
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

      <div
        className={`${styles['navbar-800']} ${
          menuIsVis ? styles['active-menu-800'] : ''
        }`}
      >
        <div className={styles['hamburger-menu-icon']} onClick={menuHandler}>
          {!menuIsVis && <HambergerMenu size='32' />}
          {menuIsVis && (
            <svg
              fill='#ffffff'
              height='24px'
              width='24px'
              viewBox='0 0 492 492'
            >
              <path
                d='M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z'
              />
            </svg>
          )}
        </div>

        {menuIsVis && (
          <div className={`${styles['nav-menu-800']}`} onClick={menuHandler}>
            <ul>
              <li>
                <Link to='/main' ref={linkRefOne}>
                  Strona <br /> główna
                </Link>
              </li>

              <li>
                <Link to='/szkolenia' ref={linkRefTwo}>
                  szkolenia
                </Link>
              </li>

              <li>
                <Link to='/cennik' ref={linkRefThree}>
                  Cennik
                </Link>
              </li>

              <li>
                <Link to='/o-nas' ref={linkRefFour}>
                  O nas
                </Link>
              </li>

              <li>
                <Link to='/kontakt' ref={linkRefFive}>
                  kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
