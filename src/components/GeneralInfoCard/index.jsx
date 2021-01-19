import React, { useState } from 'react';

import { InfoPill } from 'components';
import { Icon } from '@iconify/react';
import person from '@iconify-icons/ic/baseline-person-outline';
import testTube from '@iconify-icons/bx/bx-test-tube';

import styles from './style.module.css';

export default function GeneralInfoCard({
  icon, iconColor, pillColor, pillText, value, caption, tooltipTitle, tooltipValue, tooltipType,
}) {
  const [tooltipClasses, setTooltipClasses] = useState(`${styles.tooltip} ${tooltipType === 'warn' ? styles.red : styles.green} ${styles.tooltipHide}`);

  const icons = {
    person,
    testTube,
  };

  function showTooltip() {
    setTooltipClasses(`${styles.tooltip} ${tooltipType === 'warn' ? styles.red : styles.green}`);
  }

  function hideTooltip() {
    setTooltipClasses(`${styles.tooltip} ${tooltipType === 'warn' ? styles.red : styles.green} ${styles.tooltipHide}`);
  }

  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} className={styles.cardContainer}>
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
      <div className={tooltipClasses}>
        <h3>{tooltipTitle}</h3>
        <p>{tooltipValue}</p>
      </div>
    </div>

  );
}
