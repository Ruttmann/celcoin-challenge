import React from 'react';

import { InfoPill } from 'components';
import { Icon } from '@iconify/react';
import person from '@iconify-icons/ic/baseline-person-outline';
import testTube from '@iconify-icons/bx/bx-test-tube';

import styles from './style.module.css';

export default function GeneralInfoCard({
  icon, iconColor, pillColor, pillText, value, caption,
}) {
  const icons = {
    person,
    testTube,
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <Icon height={27} color={iconColor} icon={icons[icon]} />
          <InfoPill background={pillColor}>{pillText}</InfoPill>
        </div>
        <div className={styles.text}>
          <h3 className={styles.value}>{value}</h3>
          <p className={styles.caption}>{caption}</p>
        </div>
      </div>
      <div className={styles.backgroundCard} />
    </div>

  );
}
