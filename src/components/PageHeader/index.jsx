import React from 'react';

import gear from 'assets/gear.svg';
import bell from 'assets/bell.svg';
import menuOpener from 'assets/menu-opener.svg';
import InputHeader from './components/InputHeader';
import './index.css';

export default function PageHeader() {
  return (
    <header>
      <InputHeader placeholder="Busca..." />
      <img src={gear} alt="configurações" />
      <img src={bell} alt="notificações" />
      <img src={menuOpener} alt="menu" />
    </header>
  );
}
