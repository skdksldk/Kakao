import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Loading from '../Loading';
import CartHeader from './components/CartHeader';
import CartNothing from './components/CartNothing';
import CartNoaccess from './components/CartNoaccess';
import ErrorMessage from '../ErrorMessage';
import { CartList } from './components/cartList/';
import { getCartDetails } from './utils/cartRequest';

const Cart = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const { data, isLoading, error, refetch } = useQuery(
    'cartItems',
    getCartDetails,
  );

  if (!isLogined) return <CartNoaccess type={'login'} />;
  if (isSeller) return <CartNoaccess type={'seller'} />;
  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="🙀" message={`에러 발생: ${error.message}`} />;

  return (
    <CartContainer>
      <h2>장바구니</h2>
      <CartHeader cartItems={data} refetch={refetch} />
      {data.length === 0 ? (
        <CartNothing />
      ) : (
        <CartList cartItems={data} refetch={refetch} />
      )}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  & > h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
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
