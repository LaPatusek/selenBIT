import emailjs from '@emailjs/browser';
import { Briefcase, Call } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import useInput from '../Components/hooks/useInput';
import styles from './cennik.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_TEMPLATE_WYCENA: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Cennik: React.FC = () => {
  const [cateringState, setCateringState] = useState(false);
  const [egzaminState, setEgzaminState] = useState(false);
  const [salaState, setSalaState] = useState(false);
  const [materialsState, setMaterialsState] = useState(false);
  const wycenaRef = useRef(null);

  const materialsFunction = () => {
    setMaterialsState(!materialsState);
  };

  const SalaFunction = () => {
    setSalaState(!salaState);
  };

  const egzaminFunction = () => {
    setEgzaminState(!egzaminState);
  };

  const cateringFunction = () => {
    setCateringState(!cateringState);
  };

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const {
    value: enteredRequirements,
    isValid: requirementsIsValid,
    valueChangeHandler: requirementsChangeHandler,
    inputBlurHandler: requirementsBlurHandler,
    hasError: requirementsHasError,
    reset: requirementsReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredTime,
    isValid: timeIsValid,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    hasError: timeHasError,
    reset: timeReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (
    requirementsIsValid &&
    topicIsValid &&
    nameIsValid &&
    mailIsValid &&
    timeIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_TEMPLATE_WYCENA,
        wycenaRef.current!,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    nameReset();
    topicReset();
    mailReset();
    requirementsReset();
    timeReset();
  };

  return (
    <div className={`${styles.wrap} grid`}>
      <Helmet>
        <link rel='canonical' href='https://selenbit.pl/#/cennik' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <section className={styles['left-section']}>
        <h1>
          Skontaktuj się <br /> i zapytaj o cenę
        </h1>
        <hr />
        <div className={`${styles['contact-block']} grid`}>
          <div className={styles.icon}>
            <Call variant='Bold' />
          </div>
          <div className={styles['contact-text']}>
            <h2>Telefon</h2>
            <a href='tel:+48531771944'> +48 531 771 944 </a>
          </div>
        </div>

        <div className={`${styles['contact-block']} grid`}>
          <div className={styles.icon}>
            <Briefcase variant='Bold' />
          </div>
          <div className={styles['contact-text']}>
            <h2> Email</h2>
            <a href='mailto:eryktrojanowski@gmail.com'>
              eryktrojanowski@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className={styles['right-section']}>
        <h2>WYŚLIJ ZAPYTANIE O CENĘ SZKOLENIA</h2>
        <form onSubmit={submitHandler} ref={wycenaRef}>
          <div
            className={`${styles['input-group']} ${
              nameHasError ? styles['input-error'] : ''
            }`}
          >
            <input
              type='text'
              id='name'
              name='user_name'
              autoComplete='off'
              className={styles.input}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            <label className={styles['user-label']} htmlFor='name'>
              Imię i nazwisko
            </label>
          </div>
          <div
            className={`${styles['input-group']} ${
              topicHasError ? styles['input-error'] : ''
            }`}
          >
            <input
              type='text'
              id='topic'
              name='user_topic'
              autoComplete='off'
              className={styles.input}
              onChange={topicChangeHandler}
              onBlur={topicBlurHandler}
              value={enteredTopic}
            />
            <label className={styles['user-label']} htmlFor='topic'>
              Temat
            </label>
          </div>
          <div
            className={`${styles['input-group']} ${
              mailHasError ? styles['input-error'] : ''
            }`}
          >
            <input
              type='email'
              id='email'
              name='user_email'
              autoComplete='off'
              onChange={mailChangeHandler}
              onBlur={mailBlurHandler}
              value={enteredMail}
              className={styles.input}
            />
            <label className={styles['user-label']} htmlFor='email'>
              Adres email
            </label>
          </div>
          <div
            className={`${styles['input-group']} ${
              timeHasError ? styles['input-error'] : ''
            }`}
          >
            <input
              type='number'
              id='time'
              name='user_godziny'
              autoComplete='off'
              onChange={timeChangeHandler}
              onBlur={timeBlurHandler}
              value={enteredTime}
              className={styles.input}
            />
            <label className={styles['user-label']} htmlFor='time'>
              Ilość godzin (45min)
            </label>
          </div>
          <div
            className={`${styles['input-group']} ${
              requirementsHasError ? styles['input-error'] : ''
            }`}
          >
            <textarea
              id='requirements'
              name='message'
              autoComplete='off'
              onChange={requirementsChangeHandler}
              onBlur={requirementsBlurHandler}
              value={enteredRequirements}
              className={`${styles.input}`}
              placeholder='Napisz czego ma dotyczyć szkolenie, kto jest odbiorcą i ile osób ma zostać przeszkolonych, a także inne szczególne zamówienia.'
            />
            <label className={styles['user-label']} htmlFor='requirements'>
              Twoja wiadomość
            </label>
          </div>
          Opcje dodatkowe:
          <div className={styles['form-checkboxes']}>
            <div className={styles['checkbox-container']}>
              <label htmlFor='catering' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='catering'
                  name='catering'
                  checked={cateringState}
                  onChange={cateringFunction}
                />
                <svg viewBox='0 0 64 64' height='18px' width='18px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Catering</p>
              </label>
            </div>

            <div className={styles['checkbox-container']}>
              <label htmlFor='sala' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='sala'
                  name='sala'
                  checked={salaState}
                  onChange={SalaFunction}
                />
                <svg viewBox='0 0 64 64' height='18px' width='18px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Sala szkoleniowa</p>
              </label>
            </div>

            <div className={styles['checkbox-container']}>
              <label htmlFor='egzamin' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='egzamin'
                  name='egzamin'
                  checked={egzaminState}
                  onChange={egzaminFunction}
                />
                <svg viewBox='0 0 64 64' height='18px' width='18px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Egzamin</p>
              </label>
            </div>
            <div className={styles['checkbox-container']}>
              <label htmlFor='materialy' className={`${styles.check} flex`}>
                <input
                  type='checkbox'
                  id='materialy'
                  name='materials'
                  checked={materialsState}
                  onChange={materialsFunction}
                />
                <svg viewBox='0 0 64 64' height='18px' width='18px'>
                  <path
                    d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                    pathLength='575.0541381835938'
                    className={styles.path}
                  ></path>
                </svg>
                <p>Materiały</p>
              </label>
            </div>
          </div>
          <button>Wyślij</button>
        </form>
      </section>
    </div>
  );
};

export default Cennik;
