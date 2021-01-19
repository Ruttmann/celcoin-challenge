import React from 'react';

import { Icon } from '@iconify/react';
import edit from '@iconify-icons/ant-design/edit-filled';

import styles from './style.module.css';

export default function ButtonEdit() {
  return (
    <button type="button" className={styles.button}>
      <Icon icon={edit} color="#145AD2" />
    </button>
  );
}
