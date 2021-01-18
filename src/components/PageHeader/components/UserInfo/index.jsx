import React from 'react';

import userAvatar from 'assets/user-avatar.png';

import './style.css';

export default function UserInfo() {
  return (
    <div className="userInfo">
      <span>
        Olá,
      </span>
      <span className="userName">Felipe</span>
      <img src={userAvatar} alt="user avatar" />
    </div>
  );
}
