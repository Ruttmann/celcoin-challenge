import React from 'react';

import SectionTitle from './components/SectionTitle';

import styles from './style.module.css';

export default function PageSection({ title, children }) {
  return (
    <div className={styles.sectionContainer}>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}
