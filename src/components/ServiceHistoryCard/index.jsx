import React from 'react';

import ServiceItem from './components/ServiceItem';

import styles from './style.module.css';

export default function ServiceHistoryCard({ serviceItems }) {
  return (
    <div className={styles.serviceHistory}>
      {serviceItems.map((service) => (
        <ServiceItem
          key={service.key}
          serviceData={service}
        />
      ))}
    </div>
  );
}
