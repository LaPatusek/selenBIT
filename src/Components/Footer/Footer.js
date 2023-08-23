import { Facebook, Instagram } from 'iconsax-react';
import linkedinIcon from '../../Assets/linkedin-icon.webp';
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
        <a
          href='https://www.linkedin.com/in/eryk-trojanowski-7678ab120/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedinIcon} alt='LinkedIn' width='40px' height='40px' />
        </a>
        <a
          href='https://www.facebook.com/ErykTrojanowski'
          target='_blank'
          rel='noreferrer'
        >
          <Facebook size='40' />
        </a>
        <a
          href='https://www.instagram.com/eryk7777/'
          target='_blank'
          rel='noreferrer'
        >
          <Instagram size='40' />
        </a>
      </section>
    </div>
  );
};

export default Footer;
