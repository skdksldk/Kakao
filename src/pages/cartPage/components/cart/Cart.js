import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Loading from '/src/components/Loading';
import ErrorMessage from '/src/components/ErrorMessage';
import { CartList } from './components/cartList/';
import CartHeader from './components/CartHeader';
import CartNothing from './components/CartNothing';
import CartNoaccess from './components/CartNoaccess';
import { getCartDetails } from '../../utils/cartRequest';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const { data, isLoading, error, refetch } = useQuery(
    'cartItems',
    getCartDetails,
  );

  const onClickCartOrder = () => {
    navigate('/order', { state: { data: data, order_kind: 'cart_order' } });
  };
  const onClickCartOrderOne = () => {
    navigate('/order', { state: { data: data, order_kind: 'cart_one_order' } });
  };

  if (!isLogined) return <CartNoaccess type={'login'} />;
  if (isSeller) return <CartNoaccess type={'seller'} />;
  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <CartContainer>
      <h2>장바구니</h2>
      <CartHeader cartItems={data} refetch={refetch} />
      {data.length === 0 ? (
        <CartNothing />
      ) : (
        <CartList 
          cartItems={data} 
          refetch={refetch} 
          onClickCartOrder={onClickCartOrder}
          onClickCartOrderOne={onClickCartOrderOne}
        />
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
`;