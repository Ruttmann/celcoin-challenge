import React from 'react';

import styles from './style.module.css';

export default function InfoPill({ background, children }) {
  const colors = {
    green: styles.green,
    red: styles.red,
  };
  return (
    <div className={`${styles.infoPill} ${colors[background]}`}>{children}</div>
  );
}
