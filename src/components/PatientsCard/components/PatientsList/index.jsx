import React from 'react';

import patient1 from 'assets/patient-1.png';
import patient2 from 'assets/patient-2.png';
import patient3 from 'assets/patient-3.png';
import PatientRow from '../PatientRow';
import styles from './style.module.css';

export default function PatientsList() {
  return (
    <div className={styles.patientsList}>
      <PatientRow patientImg={patient1} />
      <PatientRow patientImg={patient2} />
      <PatientRow patientImg={patient3} />
      <PatientRow patientImg={patient1} />
    </div>
  );
}
