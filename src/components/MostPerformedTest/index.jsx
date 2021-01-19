import React from 'react';

import { ButtonGradient } from 'components';

import hive from 'assets/hive.svg';
import styles from './style.module.css';

export default function MostPerformedTest() {
  return (
    <div className={styles.mostPerformedTest}>
      <img src={hive} alt="hive" />
      <h3 className={styles.testName}>Autismo</h3>
      <p className={styles.subtitle}>LICENÇAS DISPONÍVEIS</p>
      <div className={styles.footer}>
        <h3>13</h3>
        <ButtonGradient color="blue">COMPRAR MAIS</ButtonGradient>
      </div>
    </div>
  );
}
