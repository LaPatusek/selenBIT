import { Briefcase, Call } from 'iconsax-react';
import useInput from '../Components/hooks/useInput';
import styles from './kontakt.module.css';

const Kontakt = () => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  return (
    <div className={styles['background-image']}>
      <div className={styles.wrap}>
        <section className={styles['left-section']}>
          <h1>Skontaktuj się z nami!</h1>
          <hr />
          <div className={styles['contact-block']}>
            <div className={styles.icon}>
              <Call variant='Bold' />
            </div>
            <h2>Telefon</h2>
            <p> +48 531 771 944 </p>
          </div>

          <div className={styles['contact-block']}>
            <div className={styles.icon}>
              <Briefcase variant='Bold' />
            </div>
            <h2> Email</h2>
            <p> eryktrojanowski@gmail.com </p>
          </div>
        </section>

        <section className={styles['right-section']}>
          <h2>Wyślij zapytanie</h2>
          <form onSubmit={submitHandler}>
            <div
              className={`${styles['input-group']} ${
                nameHasError ? styles['input-error'] : ''
              }`}
            >
              <input
                type='text'
                name='text'
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
                type='textarea'
                id='requirements'
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
