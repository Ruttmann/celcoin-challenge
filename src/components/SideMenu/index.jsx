import React from 'react';
import { Link } from 'react-router-dom';

import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import downloadable from '@iconify-icons/gridicons/product-downloadable';
import { Icon } from '@iconify/react';

import logo from 'assets/logo.svg';
import './style.css';

export default function SideMenu() {
  const iconStyles = { marginRight: 16 };

  return (
    <nav>
      <img src={logo} alt="app logo" />
      <hr />
      <ul>
        <li>
          <Link to="/">
            <Icon icon={homeOutlined} style={iconStyles} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/patients">
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
