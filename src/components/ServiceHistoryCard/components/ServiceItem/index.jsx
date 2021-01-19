import React from 'react';

import brain from 'assets/brain.svg';
import hive from 'assets/hive.svg';

import styles from './style.module.css';

export default function ServiceItem({ serviceData }) {
  const {
    patientName, testDescription, date, iconImg,
  } = serviceData;

  const icons = {
    brain,
    hive,
  };

  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceImg}>
        <img src={icons[iconImg]} alt={iconImg} />
      </div>

      <div className={styles.serviceData}>
        <h3 className={styles.patientName}>{patientName}</h3>
        <p className={styles.subtitle}>TESTE REALIZADO</p>
        <p className={styles.description}>{testDescription}</p>
        <p className={styles.subtitle}>REALIZADO EM:</p>
        <p className={styles.description}>{date}</p>
      </div>
    </div>
  );
}
