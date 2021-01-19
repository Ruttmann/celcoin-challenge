import React from 'react';

import { ButtonGradient, ButtonEdit } from 'components';

import styles from './style.module.css';

export default function PatientRow({ patientImg }) {
  return (
    <div className={styles.patientRow}>
      <div className={styles.patientInfo}>
        <img src={patientImg} alt="patient" />
        <div className={styles.patientData}>
          <h4 className={styles.patientName}>Renata Augusto Ferreira</h4>
          <p className={styles.subtitle}>DIAGNÓSTICO</p>
          <p className={styles.diagnosis}>TDAH CAB ADHD, Autismo</p>
        </div>
      </div>
      <div className={`${styles.testsInfo} ${styles.performed}`}>
        <h3>3</h3>
        <p>Testes realizados</p>
      </div>
      <div className={`${styles.testsInfo} ${styles.cancelled}`}>
        <h3>3</h3>
        <p>Testes cancelados</p>
      </div>
      <div className={`${styles.testsInfo} ${styles.pending}`}>
        <h3>3</h3>
        <p>Testes pendentes</p>
      </div>
      <div className={styles.actions}>
        <ButtonEdit />
        <ButtonGradient color="pink">ENVIAR NOVO TESTE</ButtonGradient>
        <ButtonGradient color="blue">ALTERAR CADASTRO</ButtonGradient>
      </div>
    </div>
  );
}
