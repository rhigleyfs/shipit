import 'bulma/css/bulma.css';
import styles from './app.module.css';

import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import SideMenu from './components/sideMenu';

function App() {
  return (
    <Router>
    <section className={styles.container}>
      <Header />
        <main>


        </main>
      <SideMenu />
    </section>
    </Router>
  );
}

export default App;
