import { Link } from 'react-router-dom';

import styles from './animatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <section className={styles['stars-background']}>
      <div className={styles.stars} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
      <div className={styles.text}>
        <h3>Rozwiązania IT którzych potrzebujesz</h3>
        <h1>Przyszłość zaczyna się tutaj</h1>
        <div className={styles['link-box']}>
          <Link to='/szkolenia' className={styles['main-button']}>
            nasza oferta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBackground;
