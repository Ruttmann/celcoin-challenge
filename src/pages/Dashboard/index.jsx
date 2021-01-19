import React from 'react';

import {
  PageContainer, PageSection, GeneralInfoCard, ServiceHistoryCard,
} from 'components';

import hive from 'assets/hive.svg';

import { serviceItems, generalInfoCards } from 'data';
import styles from './style.module.css';

export default function Dashboard() {
  return (
    <PageContainer>
      <div className={styles.dashboardContainer}>
        <PageSection title="Informações Gerais">
          {generalInfoCards.map((card) => (
            <GeneralInfoCard
              icon={card.icon}
              iconColor={card.iconColor}
              pillColor={card.pillColor}
              pillText={card.pillText}
              value={card.value}
              caption={card.caption}
            />
          ))}
        </PageSection>
        <div className={styles.flexWrapper}>
          <PageSection title="Histórico de atendimentos">
            <ServiceHistoryCard serviceItems={serviceItems} />
          </PageSection>
          <PageSection title="Teste mais realizado">
            <div className={styles.mostPerformedTest}>
              <img src={hive} alt="hive" />
              <h3 className={styles.testName}>Autismo</h3>
              <p className={styles.subtitle}>LICENÇAS DISPONÍVEIS</p>
              <div className={styles.footer}>
                <h3>13</h3>
                <button type="button">COMPRAR MAIS</button>
              </div>
            </div>
          </PageSection>
        </div>

      </div>
    </PageContainer>
  );
}
