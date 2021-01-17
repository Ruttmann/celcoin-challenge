import React from 'react';

import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
      </ul>
    </div>
  );
}
