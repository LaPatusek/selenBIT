import React from 'react';
import styles from './quote.module.css';

const Quote: React.FC = () => {
  return (
    <div className={styles['blockquote-wrapper']}>
      <div className={styles['blockquote']}>
        <h2>
          Życie jest krótkie. Korzystaj z teraźniejszości w sposób rozumny i
          słuszny. Bądź rozsądny w odpoczynku
        </h2>
        <h3>
          &mdash; Marcus <span>Aurelius</span>
        </h3>
      </div>
    </div>
  );
};

export default Quote;
