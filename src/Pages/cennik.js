import { Briefcase, Call } from 'iconsax-react';
import useInput from '../Components/hooks/useInput';
import styles from './cennik.module.css';

const Cennik = () => {
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
    value: enteredRequirements,
    isValid: requirementsIsValid,
    valueChangeHandler: requirementsChangeHandler,
    inputBlurHandler: requirementsBlurHandler,
    hasError: requirementsHasError,
    reset: requirementsReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredTime,
    isValid: timeIsValid,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    hasError: timeHasError,
    reset: timeReset,
  } = useInput((value) => value.trim() !== '');

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameReset();
    topicReset();
    mailReset();
    requirementsReset();
    timeReset();
  };

  return (
    <div className={styles['background-image']}>
      <div className={styles.wrap}>
        <section className={styles['left-section']}>
          <h1>
            Skontaktuj się <br /> i zapytaj o cenę
          </h1>
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
          <h2>WYŚLIJ ZAPYTANIE O CENĘ SZKOLENIA</h2>
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
            <label htmlFor='time'>Ilość godzin (45min)</label>
            <br />
            <input
              type='number'
              id='time'
              onChange={timeChangeHandler}
              onBlur={timeBlurHandler}
              value={enteredTime}
              placeholder='1'
            />
            {timeHasError && (
              <p className={styles['input-error']}>Wprowadź ilość godzin!</p>
            )}
            <br />
            <label htmlFor='requirements'>Wymagania dotyczące szkolenia</label>
            <br />
            <textarea
              type='textarea'
              id='requirements'
              onChange={requirementsChangeHandler}
              onBlur={requirementsBlurHandler}
              value={enteredRequirements}
              placeholder='Napisz czego ma dotyczyć szkolenie, kto jest odbiorcą i ile osób ma zostać przeszkolonych, a także inne szczególne zamówienia.'
            />
            {requirementsHasError && (
              <p className={styles['input-error']}>Wprowadź wiadomość!</p>
            )}
            <br />
            Opcje dodatkowe:
            <div className={styles['form-checkboxes']}>
              <input type='checkbox' id='catering' />
              <label htmlFor='catering'>Catering </label> <br />
              <input type='checkbox' id='sala' />
              <label htmlFor='sala'>Sala szkoleniowa </label> <br />
              <input type='checkbox' id='egzamin' />
              <label htmlFor='egzamin'>Egzamin</label> <br />
              <input type='checkbox' id='materialy' />
              <label htmlFor='materialy'>Materiały</label> <br />
            </div>
            <button>Wyślij</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Cennik;
