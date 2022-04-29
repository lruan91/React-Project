import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Support from './pages/Support';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/' element={<Languages />} /> */}
      <Route path='/about' element={<About/>} />
      <Route path='/support' element={<Support/>} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);