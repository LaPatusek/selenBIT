import styles from './szkolenia.module.css';

const Szkolenia = () => {
  return (
    <div>
      <div className={styles['page-title']}>
        <div className={styles['display-flex']}>
        <h3> Szkolenia </h3>
        </div>
        <h1>Szkolenia informatyczne</h1>
      </div>
    </div>
  );
};

export default Szkolenia;
