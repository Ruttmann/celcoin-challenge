import React from 'react';

import searchIcon from '@iconify-icons/ic/baseline-search';
import { Icon } from '@iconify/react';

import styles from './style.module.css';

export default function InputSearch(props) {
  return (
    <div className={styles.container}>
      <input {...props} type="text" className={styles.input} />
      <Icon icon={searchIcon} className={styles.icon} />
    </div>
  );
}
