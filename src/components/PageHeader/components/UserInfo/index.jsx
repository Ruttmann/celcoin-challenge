import React from 'react';

import userAvatar from 'assets/user-avatar.png';

import styles from './style.module.css';

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <span>
        Olá,
      </span>
      <span className={styles.userName}>Felipe</span>
      <img src={userAvatar} alt="user avatar" />
    </div>
  );
}
