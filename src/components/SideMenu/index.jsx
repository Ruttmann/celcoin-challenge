import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import downloadable from '@iconify-icons/gridicons/product-downloadable';
import { Icon } from '@iconify/react';

import logo from 'assets/logo.svg';
import menuOption from 'assets/menu-option.svg';
import styles from './style.module.css';

export default function SideMenu() {
  const [menuClasses, setMenuClasses] = useState(styles.menuOption);
  const { pathname } = useLocation();
  const dashboardBtn = useRef(null);
  const patientsBtn = useRef(null);

  const iconStyles = { marginRight: 16 };

  function handleClickPatients() {
    setMenuClasses(`${menuClasses} ${styles.clickedPatient}`);
  }

  function handleClickDashboard() {
    setMenuClasses(styles.menuOption);
  }

  useEffect(() => {
    if (pathname === '/patients') {
      handleClickPatients();
      patientsBtn.current.focus();
    } else {
      handleClickDashboard();
      dashboardBtn.current.focus();
    }
  }, []);

  return (
    <nav className={styles.sideMenu}>
      <img src={logo} alt="app logo" />
      <hr />
      <img src={menuOption} alt="selected option" className={menuClasses} />
      <ul>
        <li>
          <Link to="/" onClick={handleClickDashboard} ref={dashboardBtn}>
            <Icon icon={homeOutlined} style={iconStyles} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/patients" onClick={handleClickPatients} ref={patientsBtn}>
            <Icon icon={downloadable} style={iconStyles} />
            Pacientes
          </Link>
        </li>
        <li>
          <Link to="/patients">
            <Icon icon={downloadable} style={iconStyles} />
            Testes
          </Link>
        </li>
        <li>
          <Link to="/patients">
            <Icon icon={downloadable} style={iconStyles} />
            Configurações
          </Link>
        </li>
      </ul>
    </nav>
  );
}
