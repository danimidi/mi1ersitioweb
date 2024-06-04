import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
//not index name for tailwind config
import './main.css';

function App() {
  return (
    <Router basename='/mi1ersitioweb'>
      <Routes>
        <Route path='/mi1ersitioweb' element={<Landing />} />
        <Route path='/mi1ersitioweb/login' element={<Login />} />
        <Route path='/mi1ersitioweb/feed' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
