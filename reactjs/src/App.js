import 'bulma/css/bulma.css';
import styles from './app.module.css';

import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import SideMenu from './components/sideMenu';

function App() {
  return (
    <section className={styles.backgroundStars}>
      <main className={styles.container}>
        <Router>
          <Header />
          <SideMenu />
        </Router>
      </main>
    </section>
  );
}

export default App;
