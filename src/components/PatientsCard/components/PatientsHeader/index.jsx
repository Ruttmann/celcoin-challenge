import React from 'react';

import { InputSearch } from 'components';

import ellipse from 'assets/ellipse.svg';
import styles from './style.module.css';

export default function PatientsHeader() {
  return (
    <div className={styles.patientsHeader}>
      <div className={styles.main}>
        <h3 className={styles.headerTitle}>Lista de pacientes(36)</h3>
        <InputSearch placeholder="Buscar paciente..." />
      </div>
      <img src={ellipse} alt="more options" />
    </div>
  );
}
