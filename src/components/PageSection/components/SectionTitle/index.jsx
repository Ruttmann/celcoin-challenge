import React from 'react';

import styles from './style.module.css';

export default function SectionTitle({ children }) {
  return (
    <h1 className={styles.sectionTitle}>
      {children}
    </h1>
  );
}
