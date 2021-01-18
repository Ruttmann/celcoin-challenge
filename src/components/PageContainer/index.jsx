import React from 'react';

import { PageHeader } from 'components';

import styles from './style.module.css';

export default function PageContainer({ children }) {
  return (
    <main className={styles.pageContainer}>
      <PageHeader />
      {children}
    </main>
  );
}
