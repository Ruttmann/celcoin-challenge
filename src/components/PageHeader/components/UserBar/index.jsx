import React from 'react';

import './style.css';

export default function UserBar({ children }) {
  return (
    <div className="userBar">{children}</div>
  );
}
