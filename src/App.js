import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Main,
  Product,
  Cart,
  Order,
  MyInfo,
  Dashboard,
  UploadProduct,
  Login,
  Join,
  NotFound,
  EditProduct,
} from './pages/pageContents';
import { PageLayout } from './pages/PageLayout';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="mypage" element={<MyInfo />} />
          <Route path="login" element={<Login />} />
         <Route path="join" element={<Join />} />
         <Route path="*" element={<NotFound />} />
          <Route path="seller">
            <Route index element={<Dashboard />} />
            <Route path="upload_product" element={<UploadProduct />} />
            <Route path="edit_product/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;