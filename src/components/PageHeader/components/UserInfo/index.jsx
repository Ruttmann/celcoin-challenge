import React, { useState } from 'react';

import userAvatar from 'assets/user-avatar.png';

import styles from './style.module.css';

export default function UserInfo() {
  const [userMenuClasses, setUserMenuClasses] = useState(`${styles.userMenu} ${styles.userMenuHide}`);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  function toggleUserMenu() {
    if (openUserMenu) {
      setUserMenuClasses(`${styles.userMenu} ${styles.userMenuHide}`);
      setOpenUserMenu(false);
    } else {
      setUserMenuClasses(`${styles.userMenu}`);
      setOpenUserMenu(true);
    }
  }

  return (
    <div onClick={toggleUserMenu} className={styles.userInfo}>
      <span>
        Olá,
      </span>
      <span className={styles.userName}>Felipe</span>
      <img src={userAvatar} alt="user avatar" />
      <div className={userMenuClasses}>
        <p>Minha conta</p>
        <p>Configurações</p>
        <p>Sair</p>
      </div>
    </div>
  );
}
