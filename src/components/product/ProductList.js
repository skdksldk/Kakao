import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { API_URL } from '../../util/api';
import { useQuery } from 'react-query';

const getProducts = async () => {
  return fetch(`${API_URL}/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => data.results);
};


const ProductList = () => {
  const navigate = useNavigate();
  
  const { data, isLoading, error } = useQuery('products', getProducts);
 
  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <>
       {data.length === 0 ? (
        <ErrorMessage emoji="😭" message="등록된 상품이 없어요!" />
      ) : (
        <Container>
          {data.map((item) => (
            <ProductItem
              key={item.product_id}
              imgSrc={item.image}
              desc={item.product_info}
              title={item.product_name}
              price={item.price}
              onClick={() => {
                navigate(`/product/${item.product_id}`);
              }}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;

const Container = styled.section`
  padding: 80px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 80px;
  grid-column-gap: 30px;
  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
`;
