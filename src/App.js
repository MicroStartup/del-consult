import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/">
        <ServicesPage />
      </Route>
      <Route exact path="/">
        <ContactPage />
      </Route>
    </Routes>
  </Router>
);

export default App;
