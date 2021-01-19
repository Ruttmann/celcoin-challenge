import React from 'react';

import {
  PageContainer,
  PageSection,
  GeneralInfoCard,
  HistoryUpdateCard,
  InlineSectionsWrapper,
  MostPerformedTest,
  ImportantUpdates,
} from 'components';

import { serviceItems, generalInfoCards } from 'data';

export default function Dashboard() {
  return (
    <PageContainer>
      <PageSection title="Informações Gerais">
        {generalInfoCards.map((card) => (
          <GeneralInfoCard
            key={card.key}
            icon={card.icon}
            iconColor={card.iconColor}
            pillColor={card.pillColor}
            pillText={card.pillText}
            value={card.value}
            caption={card.caption}
            tooltipTitle={card.tooltipTitle}
            tooltipValue={card.tooltipValue}
            tooltipType={card.tooltipType}
          />
        ))}
      </PageSection>
      <InlineSectionsWrapper>
        <PageSection title="Histórico de atendimentos">
          <HistoryUpdateCard serviceItems={serviceItems} />
        </PageSection>
        <div style={{ marginLeft: '16px' }}>
          <PageSection title="Teste mais realizado">
            <MostPerformedTest />
          </PageSection>
        </div>
      </InlineSectionsWrapper>
      <PageSection title="Atualizações importantes">
        <ImportantUpdates />
      </PageSection>
    </PageContainer>
  );
}
