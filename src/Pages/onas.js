import { Messages3 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import photo from '../Assets/meeting-photo.jpg';
import styles from './onas.module.css';

const Onas = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrap}>
        <section className={styles['left-section']}>
          <p className={styles.paragraf}>Selenbit - przekazujemy wiedzę</p>
          <img src={photo} alt='' loading='lazy' />
          <div className={styles['left-section--quote']}>
            <p>
              „Żyj tak, jakbyś miał umrzeć jutro. Ucz się tak, jakbyś miał żyć
              wiecznie.”
            </p>
            <hr />
            <p>Gandhi Mahatma</p>
          </div>
        </section>
        <section className={styles['right-section']}>
          <h1>O nas</h1>
          <hr />
          <h2>
            Jesteśmy firmą, która od początku 2018 roku działa na ternie
            Rzeszowa i całego kraju w branży informatyczno-szkoleniowej. Przez
            ostatnie lata dokładamy wszelkich starań, aby sprostać współczesnym
            wymaganiom naszych klientów. Wiemy, że każde szkolenie powinno
            przynosić efekty w postaci nowych umiejętności u naszych Kursantów.
            Pomagamy rozwijać posiadane umiejętności, aby sprostać współczesnym
            wymaganiom cyfryzacji. Podnosimy kwalifikacje wspólnie zmieniając
            świat na lepsze, co jest naszym celem. Dbamy, aby przy tym wszystkim
            szkolenia odbywały się w dobrej, przyjaznej atmosferze. Nasze
            szkolenia są skierowane dla osób w każdym wieku – od dzieci
            pomagając im wejść w świat informatycznej logiki po seniorów, którzy
            ochoczo wkraczają w świat ułatwień jakie niesie ze sobą doba
            cyfryzacji. Organizujemy szkolenia grupowe, jak i indywidualne.{' '}
            <br />
            Spotkajmy się na szkoleniu!
          </h2>
          <Link to='/Kontakt' className={styles['right-section--contact-link']}>
            Skontaktuj się z nami! <Messages3 size='17' />
          </Link>
        </section>
        <section className={styles['left-section-800']}>
          <p className={styles.paragraf}>Selenbit - przekazujemy wiedzę</p>
          <img src={photo} alt='' loading='lazy' />
          <div className={styles['left-section--quote']}>
            <p>
              „Żyj tak, jakbyś miał umrzeć jutro. Ucz się tak, jakbyś miał żyć
              wiecznie.”
            </p>
            <hr />
            <p>Gandhi Mahatma</p>
          </div>
        </section>
      </div>
      <div className={styles['bottom-section']}>
        <h2>Firmy, z którymi współpracowaliśmy</h2>
        <div className={styles['firm-container']}>
          <div className={styles['bottom-firm-box']}>przykład 1</div>
          <div className={styles['bottom-firm-box']}>przykład 2</div>
          <div className={styles['bottom-firm-box']}>przykład 3</div>
          <div className={styles['bottom-firm-box']}>przykład 4</div>
          <div className={styles['bottom-firm-box']}>przykład 5</div>
        </div>
      </div>
    </div>
  );
};

export default Onas;
