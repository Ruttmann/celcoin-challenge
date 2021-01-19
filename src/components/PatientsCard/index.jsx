import React from 'react';

import PatientsHeader from './components/PatientsHeader';
import PatientsList from './components/PatientsList';

import styles from './style.module.css';

export default function PatientsCard() {
  return (
    <div className={styles.patientsCard}>
      <PatientsHeader />
      <PatientsList />
    </div>
  );
}
