import { ArrowDown } from 'iconsax-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useObserver from '../hooks/useObserver';
import styles from './animatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isVisible = useObserver(textRef);

  const generateBoxShadow = (n: number) => {
    let value = `${getRandom(100)}vw ${getRandom(200)}vh #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(100)}vw ${getRandom(200)}vh #FFF`;
    }
    return value;
  };

  const getRandom = (max: number) => {
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
          <h1>Rozwiązania IT, których potrzebujesz</h1>
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
            <Link to='/szkolenia'>Nasza oferta</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBackground;
