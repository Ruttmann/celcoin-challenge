import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';

import { Dashboard, Patients } from './pages';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/patients" component={Patients} />
        </Switch>
      </Router>
    </div>
  );
}
