import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import thirdIcon from '../Assets/human-icon.webp';
import firstIcon from '../Assets/migrate-icon.webp';
import secondIcon from '../Assets/target-icon.webp';
import AnimatedBackground from '../Components/Elements/animatedBackground';
import Quote from '../Components/Elements/quote';
import styles from './main.module.css';

const Main: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <link rel='canonical' href='https://selenbit.pl/' />
        <meta name='robots' content='index, follow' />
      </Helmet>

      <section className={styles['first-section']}>
        <AnimatedBackground />
      </section>

      <section className={styles['second-section']}>
        <div className={`${styles['second-section-title']} center`}>
          <h1>Co oferujemy?</h1>
          <h2>Szkolenia</h2>
          <p>
            Oferujemy szkolenia informatyczne na terenie Rzeszowa oraz całego
            kraju. <br /> Robimy to z pasją. Skutecznie.
          </p>
        </div>

        <div className={`${styles['second-section-boxes']} grid`}>
          <div className={`${styles['content-box']} center grid`}>
            <div className={styles['flex-wrap']}>
              <img
                src={firstIcon}
                alt='Jesteśmy mobilni'
                width='110px'
                height={'110px'}
              />
              <h3>Jesteśmy mobilni</h3>
              <h4>Przyjedziemy do Ciebie</h4>
              <p>
                Zajęcia prowadzimy lokalnie, nasi trenerzy trafią w wyznaczone
                miejsce. Oferujemy także szkolenia zdalne.
              </p>
            </div>
          </div>
          <div className={`${styles['content-box']} center grid`}>
            <div className={styles['flex-wrap']}>
              <img
                src={secondIcon}
                alt='Dopasujemy się do Ciebie'
                width='110px'
                height='110px'
              />
              <h3>Dopasujemy się do Ciebie</h3>
              <h4>Spełnimy Twoje oczekiwania</h4>
              <p>
                Szkolenia opracowujemy i dopasowujemy do Twoich i Twojej firmy
                potrzeb.
              </p>
            </div>
          </div>
          <div className={`${styles['content-box']} center grid`}>
            <div className={styles['flex-wrap']}>
              <img
                src={thirdIcon}
                alt='Inwidualne podejście'
                width='110px'
                height={'110px'}
              />
              <h3>Inwidualne podejście</h3>
              <h4>Dopasujemy się do poziomu </h4>
              <p>
                Wiemy, że szkolenia spotykają się ze zróżnicowaną potrzebą
                uczestników. Bez obaw. Dostoujemy się.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['fourth-section']}>
        <h3>SelenBit - Przekazujemy wiedzę</h3>
        <h4>
          Pomożemy Ci rozwinąć posiadane umiejętności, aby sprostać współczesnym
          wymaganiom cyfryzacji.
        </h4>
        <Link to='/cennik' className={styles['fourth-section--button']}>
          Wyceń szkolenie
        </Link>
      </section>

      <section className={`${styles['third-section']} grid`}>
        <div className={styles['third-section--left-part']}>
          <h2>O nas</h2>
          <p>
            Jesteśmy firmą działającą na rynku szkoleń od 2018 roku. Mamy bogate
            doświadczenie w nauczaniu. Posiadamy wpis do Rejestru Instytucji
            Szkoleniowych. <br /> Naszym sukcesem są zadowoleni kursanci.
          </p>
        </div>

        <div className={styles['third-section--right-part']}>
          <Quote />
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
