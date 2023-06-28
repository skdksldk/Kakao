import React from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import IconPlus from '../../../public/assets/icon-circle-plus.svg';
import IconMinus from '../../../public/assets/icon-circle-minus.svg';
import TextPrice from './TextPrice';

const CartFooter = () => {
  return (
    <Container>
      <PriceContainer>
       <TextPrice title={'총 상품금액'} price={46500} />
        <img src={IconMinus} />
        <TextPrice title={'상품 할인'} price={0} />
        <img src={IconPlus} />
        <TextPrice title={'배송비'} price={0} />
        <div></div>
        <TextPrice title={'결제 예정 금액'} price={46500} color={'red'} />
      </PriceContainer>
      <ColorButton size={'L'} width={'220px'}>
        주문하기
      </ColorButton>
    </Container>
  );
};

export default CartFooter;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    max-width:100%;
  }
  @media screen and (max-width: 768px) {
    max-width:100%;
  }
  @media screen and (max-width: 576px) {
    max-width:100%;
  }
`;

const PriceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 40px 100px;
  background-color: #f2f2f2;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    max-width:100%;
  }
  @media screen and (max-width: 768px) {
    max-width:100%;
  }
  @media screen and (max-width: 576px) {
    max-width:100%;
  }
`;