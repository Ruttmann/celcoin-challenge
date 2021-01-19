import React from 'react';

import patient1 from 'assets/patient-1.png';
import patient2 from 'assets/patient-2.png';
import patient3 from 'assets/patient-3.png';
import styles from './style.module.css';

export default function ImportantUpdates() {
  return (
    <div className={styles.importantUpdatesContainer}>
      <div className={styles.importantUpdatesCard}>
        <img src={patient1} alt="patient" />
        <div className={styles.content}>
          <p className={styles.subtitle}>PACIENTE</p>
          <h4 className={styles.patientName}>Renata Augusto Ferreira</h4>
          <p className={`${styles.testInfo} ${styles.completed}`}>
            COMPLETOU O TESTE:
            {' '}
            <strong>TDAH CAB ADHD</strong>
          </p>
          <p className={styles.subtitle}>
            REALIZADO EM:
            {' '}
            <strong>20/10/2023</strong>
          </p>
        </div>
      </div>

      <div className={styles.importantUpdatesCard}>
        <img src={patient2} alt="patient" />
        <div className={styles.content}>
          <p className={styles.subtitle}>PACIENTE</p>
          <h4 className={styles.patientName}>Renata Augusto Ferreira</h4>
          <p className={`${styles.testInfo} ${styles.cancelled}`}>
            CANCELOU O TESTE:
            {' '}
            <strong>TDAH CAB ADHD</strong>
          </p>
          <p className={styles.subtitle}>
            REALIZADO EM:
            {' '}
            <strong>20/10/2023</strong>
          </p>
        </div>
      </div>

      <div className={styles.importantUpdatesCard}>
        <img src={patient3} alt="patient" />
        <div className={styles.content}>
          <p className={styles.subtitle}>PACIENTE</p>
          <h4 className={styles.patientName}>Renata Augusto Ferreira</h4>
          <p className={`${styles.testInfo} ${styles.cancelled}`}>
            CANCELOU O TESTE:
            {' '}
            <strong>TDAH CAB ADHD</strong>
          </p>
          <p className={styles.subtitle}>
            REALIZADO EM:
            {' '}
            <strong>20/10/2023</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
