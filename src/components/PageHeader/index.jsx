import React from 'react';

import gear from 'assets/gear.svg';
import bell from 'assets/bell.svg';
import menuOpener from 'assets/menu-opener.svg';
import { InputSearch } from 'components';
import UserBar from './components/UserBar';
import UserInfo from './components/UserInfo';

import styles from './style.module.css';

export default function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <InputSearch placeholder="Busca..." />
      <UserBar>
        <img src={gear} alt="configurações" />
        <img src={bell} alt="notificações" />
        <UserInfo />
        <img src={menuOpener} alt="menu" />
      </UserBar>
    </header>
  );
}
