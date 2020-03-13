import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import 'bulma/css/bulma.css';

function App() {
  return (
    <section className={styles.backgroundStars}>
      <main className={styles.container}>
        <Router>
          <Header />
        </Router>
      </main>
    </section>
  );
}

export default App;
