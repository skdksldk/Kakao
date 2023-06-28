import React from 'react';
import styled from 'styled-components';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';

const CartHeader = ({ all, setAll }) => {
  return (
    <Container>
      <CheckboxContainer>
        <Checkbox type="checkbox" id="checkAll" onChange={() => setAll(!all)} />
        <label htmlFor="checkAll" />
      </CheckboxContainer>
      <ItemInfoContainer>상품정보</ItemInfoContainer>
      <AmountContainer>수량</AmountContainer>
      <PriceContainer>상품금액</PriceContainer>
    </Container>
  );
};

export default CartHeader;

const Container = styled.article`
  margin-top: 50px;
  margin-bottom: 35px;
  display: flex;
  
  width: 1280px;
  background-color: #F2F2F2;
  div {
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    width:100%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;

const CheckboxContainer = styled.div`
  width: 90px;
`;

const ItemInfoContainer = styled.div`
  flex-grow: 1;
  @media screen and (max-width: 1024px) {
    width:100%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;

const AmountContainer = styled.div`
  width: 250px;
  @media screen and (max-width: 1024px) {
    width:100%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;

const PriceContainer = styled.div`
  width: 300px;
  @media screen and (max-width: 1024px) {
    width:100%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    background: url(${IconOn}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOff});
  }
  @media screen and (max-width: 1024px) {
    width:100%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;