import React from 'react';
import styled from 'styled-components';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { Seller } from './components/Seller';

const SellerPage = () => {
  return (
    <Container>
      <Header />
      <Seller />
      <Footer />
    </Container>
  );
};

export default SellerPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
