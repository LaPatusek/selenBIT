import emailjs from '@emailjs/browser';
import { Briefcase, Call } from 'iconsax-react';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import useInput from '../Components/hooks/useInput';
import styles from './kontakt.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_TEMPLATE_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Kontakt: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

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
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
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
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current!,
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
    messageReset();
  };

  return (
    <div className={styles['background-image']}>
      <Helmet>
        <link rel='canonical' href='https://selenbit.pl/#/kontakt' />
      </Helmet>
      <div className={`${styles.wrap} grid`}>
        <section className={styles['left-section']}>
          <h1>Skontaktuj się z nami!</h1>
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
          <h2>Wyślij zapytanie</h2>
          <form onSubmit={submitHandler} ref={formRef}>
            <div
              className={`${styles['input-group']} ${
                nameHasError ? styles['input-error'] : ''
              }`}
            >
              <input
                type='text'
                name='user_name'
                id='name'
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
                messageHasError ? styles['input-error'] : ''
              }`}
            >
              <textarea
                id='requirements'
                name='message'
                autoComplete='off'
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                value={enteredMessage}
                className={`${styles.input}`}
              />
              <label className={styles['user-label']} htmlFor='requirements'>
                Twoja wiadomość
              </label>
            </div>
            <button>Wyślij</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Kontakt;
