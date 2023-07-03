import React from 'react';
import styled from 'styled-components';

const SellerButton = ({ iconSrc, children, ...props }) => {
  return (
    <Container  {...props}>
      {iconSrc && <img src={iconSrc} />}
      {children}
    </Container>
  );
};

export default SellerButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  margin-left: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff7f00;
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    padding: 10px 16px;
    font-size: 14px;
    img {
      width: 24px;
    }
  }
  @media screen and (max-width: 576px) {
    margin-left: 10px;
    padding: 8px 12px;
    font-size: 12px;
    img {
      width: 18px;
    }
  }
`;
