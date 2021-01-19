import React from 'react';

import styles from './style.module.css';

export default function ButtonGradient({ children, color }) {
  return (
    <button type="button" className={`${styles.button} ${styles[color]}`}>{children}</button>
  );
}
