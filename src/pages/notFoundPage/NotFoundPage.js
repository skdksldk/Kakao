import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundIcon from '/public/assets/ico_empty_ryan.png';
import ColorButton from '../../components/button/ColorButton';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={NotFoundIcon} />
      <TextContainer>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.<br></br>웹
          주소가 올바른지 확인해주세요.
        </p>
        <ButtonContainer>
          <ColorButton size="M" width="200px" onClick={() => navigate('/')}>
            메인으로
          </ColorButton>
          <ColorButton
            size="M"
            width="200px"
            color="white"
            onClick={() => navigate(-1)}
          >
            이전 페이지
          </ColorButton>
        </ButtonContainer>
      </TextContainer>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 750px;
  @media screen and (max-width: 1024px) {
    margin-top:20%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-top:30%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    margin-top:30%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 100%;
  }
`;

const TextContainer = styled.section`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
  @media screen and (max-width: 1024px) {
    margin-top: -150px;
    margin-left: 120px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 200px;
    h2 {
      margin-top: 50px;
      margin-left: -20px;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      width:250px;
      margin-top: 550px;
    }
    p {
      margin-left: -20px;
      margin-top: 20px;
      font-size: 16px;
      line-height: 20px;
      color: #767676;
      width:250px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: -100px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 200px;
    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }
    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 20px;
      color: #767676;
    }
  }
  @media screen and (max-width: 576px) {
    margin-top: 50px;
    margin-left: -100px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 200px;
    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }
    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 20px;
      color: #767676;
    }
  }
`;

const ButtonContainer = styled.article`
  margin-top: 40px;
  display: flex;
  button + button {
    margin-left: 14px;
  }
  @media screen and (max-width: 1024px) {
    transform: translate(-50%, -50%);
    margin-top: 350px;
    margin-left: 50px;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    transform: translate(-50%, -50%);
    margin-top: 350px;
    margin-left: 50px;
    display: flex;
  }
  @media screen and (max-width: 576px) {
    transform: translate(-50%, -50%);
    margin-top: 350px;
    margin-left:50px;
    display: flex;
  }
`;
