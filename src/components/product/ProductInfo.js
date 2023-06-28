import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import ProductSummary from './ProductSummary';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

const ProductInfo = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  const getProductInfo = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/products/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      // if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => {
      setProductData(data);
      setLoading(false);
    })
    .catch((e) => alert(e.message));
  };

  useEffect(() => {
    getProductInfo();
  }, [params.id]);

  return (
    <Container>
         {loading ? (
        <Loading />
      ) : !productData || productData.detail === '찾을 수 없습니다.' ? (
            <ErrorMessage emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />
      ) : (
        <>
          <ProductIntro>
            <img src={productData.image} />
            <ProductSummary id={params.id}  productData={productData} />
          </ProductIntro>
          <ProductDetail />
        </>
      )}
    </Container>
  );
};

export default ProductInfo;

const Container = styled.main`
  width: 1280px;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 140px;
}
`;

const ProductIntro = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  img {
    max-width:100%;
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
}
`;