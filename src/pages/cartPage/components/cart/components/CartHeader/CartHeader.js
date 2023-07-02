import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  sendRequestWithCallback,
  updateBody 
} from '../../../../utils/cartRequest';
import IconOn from '/public/assets/check-circle-on.svg';
import IconOff from '/public/assets/check-circle-off.svg';
import {
  Container,
  ItemInfoContainer,
  AmountContainer,
  PriceContainer,
} from './style';

const CartHeader = ({ cartItems, refetch }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleAll = () => {
    Promise.all(
      cartItems.map(({ cart_item_id, product_id, quantity }) =>
        sendRequestWithCallback(
          cart_item_id,
          updateBody(product_id, quantity, !isChecked),
          refetch,
        ),
      ),
    );
    setIsChecked((checked) => !checked);
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="checkAll"
        checked={isChecked}
        onChange={toggleAll}
      />
      <label htmlFor="checkAll" />
      <ItemInfoContainer>상품정보</ItemInfoContainer>
      <AmountContainer>수량</AmountContainer>
      <PriceContainer>상품금액</PriceContainer>
    </Container>
  );
};

export default CartHeader;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    margin-left: 30px;
    background: url(${IconOff}) center/20px 20px;
    @media screen and (max-width: 1024px) {
      width:65px;
    }
    @media screen and (max-width: 768px) {
      width:65px;
    }
    @media screen and (max-width: 576px) {
      width:65px;
    }
  }
  &:checked + label {
    background-image: url(${IconOn});
  }
`;


