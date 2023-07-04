import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '/src/components/Header';
import { Product } from './components/product';
import Footer from '/src/components/Footer';

const ProductPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Container>
      <Header />
      <Product />
      <Footer />
    </Container>
  );
};

export default ProductPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
