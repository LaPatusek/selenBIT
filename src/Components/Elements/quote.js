import styles from './quote.module.css';

const Quote = () => {
  return (
    <div className={styles['blockquote-wrapper']}>
      <div className={styles['blockquote']}>
        <h1>
          Życie jest krótkie. Korzystaj z teraźniejszości w sposób rozumny i
          słuszny. Bądź rozsądny w odpoczynku
        </h1>
        <h4>
          &mdash; Marcus <span>Aurelius</span>
        </h4>
      </div>
    </div>
  );
};

export default Quote;
