import 'bulma/css/bulma.css';
import styles from './app.module.css';

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import SideMenu from './components/sideMenu';
import CreatePost from './pages/createPost';
import Home from './pages/home';
import Post from './pages/post';
import Tag from './pages/tag';
import Tags from './pages/tags';
import Users from './pages/users';

function App() {
  return (
    <section className={styles.backgroundStars}>
      <section className={styles.container}>
        <Router>
          <Header />
          <SideMenu />
          <main className={styles.content}>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/posts/:postId" component={Post} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/tags/:tag" component={Tag} />
          </main>
        </Router>
      </section>
    </section>
  );
}

export default App;
