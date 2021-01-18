import React from 'react';

import styles from './style.module.css';

export default function UserBar({ children }) {
  return (
    <div className={styles.userBar}>{children}</div>
  );
}
