import szkolenia from '../json/szkolenia.json';
import styles from './szkolenia.module.css';

const Szkolenia = () => {
  return (
    <div className={styles.background}>
      <section className={styles['page-title']}>
        <div className={styles['display-flex']}>
          <h3> Szkolenia </h3>
        </div>
        <h1>Szkolenia informatyczne</h1>
      </section>
      <section className={styles['main-section']}>
        <div className={styles['main-section--left']}>
          {szkolenia.szkolenia.left.map((Item) => {
            return (
              <div
                className={`${styles['main-section-container']} grid`}
                key={Item.title}
              >
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={Item.src}
                    width='56px'
                    height='56px'
                    alt={Item.title}
                  />
                  <h3>{Item.title}</h3>
                </div>
                <p>{Item.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles['main-section--right']}>
          {szkolenia.szkolenia.right.map((Item) => {
            return (
              <div
                className={`${styles['main-section-container']} grid`}
                key={Item.title}
              >
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={Item.src}
                    width='56px'
                    height='56px'
                    alt={Item.title}
                  />
                  <h3>{Item.title}</h3>
                </div>
                <p>{Item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Szkolenia;
