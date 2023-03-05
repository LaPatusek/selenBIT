import { Facebook, Instagram } from 'iconsax-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section className={styles['first-section']}>
        <h1>
          © SELENBIT 2023 <br /> WSZELKIE PRAWA ZASTRZEŻONE.
        </h1>
      </section>
      <section className={styles['social-media']}>
        <a href=''>
          <Facebook size="40"/>
        </a>
        <a href=''>
          <Instagram size="40" />
        </a>
      </section>
    </div>
  );
};

export default Footer;
