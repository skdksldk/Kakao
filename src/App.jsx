import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="product:/id" element={<ProductPage />} /> 
      <Route path="login" element={<LoginPage />} />
      <Route path="join" element={<JoinPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;