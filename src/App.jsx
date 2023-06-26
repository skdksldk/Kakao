import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginJoinPage from './pages/LoginJoinPage';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Routes>
     {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<ProductPage />} />
      <Route path="login" element={<LoginJoinPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;