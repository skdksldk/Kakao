import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import ProductDetail from './ProductDetail';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { API_URL } from '../../util/api';
import { useQuery } from 'react-query';


const getProductInfo = async (id) => {
  return fetch(`${API_URL}/products/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    // if (!res.ok) throw new Error('http error');
    return res.json();
  });
};


const ProductContent = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery(['productInfo', params.id], () =>
    getProductInfo(params.id),
  );

  if (isLoading) return <Loading />;
  if (data?.detail === '찾을 수 없습니다.')
    return <ErrorMessage emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <Container>
     <ProductIntro>
        <img src={data.image} />
        <ProductInfo id={params.id} productData={data} />
      </ProductIntro>
      <ProductDetail />
    </Container>
  );
};

export default ProductContent;

const Container = styled.main`
  width: 1280px;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 140px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const ProductIntro = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
 
  & > img {
    width: 630px;
    height: 630px;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      margin-top: 2%;
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 2%;
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 576px) {
      margin-top: 2%;
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
