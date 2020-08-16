import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import './App.css';

function App() {
  // const body = {
  //   backgroundImage: 'url(+background+)',
  //   backgroundSize: 'cover',
  //   maxHeight: '100%',
  //   color: '#fff'
  // }
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Router>
      <Footer />

    </div>
  );
}

export default App;
