import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImgLogo from '/public/assets/kakao.jpg';
import { LoginForm } from './components/LoginForm';
import { LoginFooter } from './components/LoginFooter';
import { Container, FormContainer, FormType } from './style';


const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  return (
    <Container>
      <Img src={ImgLogo} onClick={() => navigate('/')} />
      <FormContainer>
        <FormType selected={userType}>
          <button onClick={() => setUserType('BUYER')}>구매회원 로그인</button>
          <button onClick={() => setUserType('SELLER')}>판매회원 로그인</button>
        </FormType>
        <LoginForm userType={userType} />
      </FormContainer>
      <LoginFooter />
    </Container>
  );
};

export default LoginPage;


const Img = styled.img`
  cursor: pointer;
`;

