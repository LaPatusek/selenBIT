<<<<<<< HEAD
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
            <label htmlFor='name'>Imię i nazwisko</label> <br />
            <input
              type='text'
              id='name'
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder='Imię i nazwisko'
            />
            {nameHasError && (
              <p className={styles['input-error']}>Wprowadź imie i nazwisko!</p>
            )}
            <br />
            <label htmlFor='topic'>Temat</label>
            <br />
            <input
              type='text'
              id='topic'
              onChange={topicChangeHandler}
              onBlur={topicBlurHandler}
              value={enteredTopic}
              placeholder='Temat'
            />
            {topicHasError && (
              <p className={styles['input-error']}>Wprowadź temat!</p>
            )}
            <br />
            <label htmlFor='email'>Adres email</label>
            <br />
            <input
              type='email'
              id='email'
              onChange={mailChangeHandler}
              onBlur={mailBlurHandler}
              value={enteredMail}
              placeholder='Adres email'
            />
            {mailHasError && (
              <p className={styles['input-error']}>
                Wprowadź prawidłowy email!
              </p>
            )}
            <br />
            <label htmlFor='message'>Wiadomość</label>
            <br />
            <textarea
              type='textarea'
              id='message'
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
              placeholder='Treść wiadomości...'
            />
            {messageHasError && (
              <p className={styles['input-error']}>Wprowadź wiadomość!</p>
            )}
            <br />
            <button>Wyślij</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Kontakt;
=======
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
            <label htmlFor='name'>Imię i nazwisko</label> <br />
            <input
              type='text'
              id='name'
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder='Imię i nazwisko'
            />
            {nameHasError && (
              <p className={styles['input-error']}>Wprowadź imie i nazwisko!</p>
            )}
            <br />
            <label htmlFor='topic'>Temat</label>
            <br />
            <input
              type='text'
              id='topic'
              onChange={topicChangeHandler}
              onBlur={topicBlurHandler}
              value={enteredTopic}
              placeholder='Temat'
            />
            {topicHasError && (
              <p className={styles['input-error']}>Wprowadź temat!</p>
            )}
            <br />
            <label htmlFor='email'>Adres email</label>
            <br />
            <input
              type='email'
              id='email'
              onChange={mailChangeHandler}
              onBlur={mailBlurHandler}
              value={enteredMail}
              placeholder='Adres email'
            />
            {mailHasError && (
              <p className={styles['input-error']}>
                Wprowadź prawidłowy email!
              </p>
            )}
            <br />
            <label htmlFor='message'>Wiadomość</label>
            <br />
            <textarea
              type='textarea'
              id='message'
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
              placeholder='Treść wiadomości...'
            />
            {messageHasError && (
              <p className={styles['input-error']}>Wprowadź wiadomość!</p>
            )}
            <br />
            <button>Wyślij</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Kontakt;
>>>>>>> 90d1ffcace57f94e7767c3448206fd5f0c8b7765
