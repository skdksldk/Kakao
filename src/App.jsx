import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginJoinPage from './pages/LoginJoinPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
  <Routes>
    {/* <Route path="/" element={<MainPage />} /> */}
    <Route path="/" element={<LoginJoinPage />} />
    <Route path="login" element={<LoginJoinPage />} />
  </Routes>
  );
}

export default App;