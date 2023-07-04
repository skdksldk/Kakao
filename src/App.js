import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Main,
  Product,
  Cart,
  Order,
  MyInfo,
  Dashboard,
  UploadProduct,
} from './pages/pageContents';
import { PageLayout } from './pages/PageLayout';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
 

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
         <Route path="/" element={<PageLayout/>}>
          <Route index element={<Main />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="mypage" element={<MyInfo />} />
          <Route path="seller">
            <Route index element={<Dashboard />} />
            <Route path="upload_product" element={<UploadProduct/>} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;