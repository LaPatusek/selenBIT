import { ArrowDown } from 'iconsax-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useObserver from '../hooks/useObserver';
import styles from './animatedBackground.module.css';

const AnimatedBackground = () => {
  const textRef = useRef();
  const isVisible = useObserver(textRef);

  const generateBoxShadow = (n) => {
    let value = `${getRandom(100)}vw ${getRandom(230)}vh #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(100)}vw ${getRandom(230)}vh #FFF`;
    }
    return value;
  };

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const smallShadows = generateBoxShadow(700);
  const mediumShadows = generateBoxShadow(200);
  const bigShadows = generateBoxShadow(100);

  return (
    <section className={styles['stars-background']}>
      <div className={`${styles.stars}`} style={{ boxShadow: smallShadows }} />
      <div
        className={`${styles.stars2}`}
        style={{ boxShadow: mediumShadows }}
      />
      <div className={`${styles.stars3}`} style={{ boxShadow: bigShadows }} />
      <div className={styles.text}>
        <div className={styles['higher-text']}>
          <h1>Rozwiązania IT których potrzebujesz</h1>
          <a href='#oferta'>
            <ArrowDown color='#fff' /> Zobacz teraz <ArrowDown color='#fff' />
          </a>
        </div>
        <div
          className={`${styles['lower-text']} ${
            isVisible ? styles.active : ''
          }`}
          ref={textRef}
          id='oferta'
        >
          <h2>Przyszłość zaczyna się tutaj</h2>
          <div className={`${styles['link-box']} flex`}>
            <Link to='/szkolenia' className={styles['main-button']}>
              nasza oferta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBackground;
