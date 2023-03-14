import styles from './quote.module.css';

const Quote = () => {
  return (
    <div className={styles['blockquote-wrapper']}>
      <div className={styles['blockquote']}>
        <h1>
          Życie jest krótkie. Korzystaj z teraźniejszości w sposób rozumny
          <span> i słuszny. Bądź rozsądny w odpoczynku</span>
        </h1>
        <h4>&mdash; Marcus Aurelius</h4>
      </div>
    </div>
  );
};

export default Quote;
