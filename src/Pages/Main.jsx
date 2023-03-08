import { Fragment } from 'react';

import AnimatedBackground from '../Components/Elements/animatedBackground';

import styles from './main.module.css';

const Main = () => {
  return (
    <Fragment>
      <section className={styles['first-section']}>
        <AnimatedBackground />
      </section>

      <section className={styles['second-section']}>
        <div className={styles['second-section-title']}>
          <h3>Co oferujemy?</h3>
          <h1>Szkolenia</h1>
          <p>
            Oferujemy szkolenia informatyczne na terenie Rzeszowa oraz całego
            kraju. <br /> Robimy to z pasją. Skutecznie.
          </p>
        </div>

        <div className={styles['second-section-boxes']}>
          <div className={styles['first-box']}>
            <h3>Jesteśmy mobilni</h3>
            <h2>Przyjedziemy do Ciebie</h2>
            <p>
              Zajęcia prowadzimy lokalnie, nasi trenerzy trafią w wyznaczone
              miejsce. Oferujemy także szkolenia zdalne.
            </p>
          </div>
          <div className={styles['second-box']}>
            <h3>Dopasujemy się do Ciebie</h3>
            <h2>Spełnimy Twoje oczekiwania</h2>
            <p>
              Szkolenia opracowujemy i dopasowujemy do Twoich i Twojej firmy
              potrzeb.
            </p>
          </div>
          <div className={styles['third-box']}>
            <h3>Inwidualne podejście</h3>
            <h2>Dopasujemy się do poziomu </h2>
            <p>
              Wiemy, że szkolenia spotykają się ze zróżnicowaną potrzebą
              uczestników. Bez obaw. Dostoujemy się.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
