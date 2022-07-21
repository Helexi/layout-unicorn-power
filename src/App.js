import React from 'react';
import '../src/reset-css.css';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Section } from './components/Section/Section';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Section />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
