import React from 'react';

import {
  PageContainer, PageSection, HistoryUpdateCard, PatientsCard,
} from 'components';

import { patientsUpdates } from 'data';

export default function Patients() {
  return (
    <PageContainer>
      <PageSection title="Atualizações de pacientes">
        <HistoryUpdateCard serviceItems={patientsUpdates} />
      </PageSection>

      <PageSection title="Todos os pacientes">
        <PatientsCard />
        {/* <div className={styles.patientsCard}>
          <div className={styles.patientsHeader}>
            <div className={styles.main}>
              <h3 className={styles.headerTitle}>Lista de pacientes(36)</h3>
              <InputSearch placeholder="Buscar paciente..." />
            </div>
            <img src={ellipse} alt="more options" />
          </div>
          <div className={styles.patientsList}>
            <div className={styles.patientRow}>
              <div className={styles.patientInfo}>
                <img src={patient} alt="patient" />
                <div className={styles.patientData}>
                  <h4 className={styles.patientName}>Renata Augusto Ferreira</h4>
                  <p className={styles.subtitle}>DIAGNÓSTICO</p>
                  <p className={styles.diagnosis}>TDAH CAB ADHD, Autismo</p>
                </div>
              </div>
              <div className={styles.testsInfo}>
                <h3>3</h3>
                <p>Testes realizados</p>
              </div>
              <div className={styles.testsInfo}>
                <h3>3</h3>
                <p>Testes realizados</p>
              </div>
              <div className={styles.testsInfo}>
                <h3>3</h3>
                <p>Testes realizados</p>
              </div>
              <div className={styles.actions}>
                <button>ENVIAR NOVO TESTE</button>
                <button>asdasd</button>
              </div>
            </div>

          </div>
        </div> */}
      </PageSection>
    </PageContainer>
  );
}
