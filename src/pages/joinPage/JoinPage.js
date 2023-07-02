import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { JoinForm } from './components/joinForm';
import { Container, FormType } from './style';
import ImgLogo from '/public/assets/kakao.jpg';

const JoinPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  return (
    <Container>
      <Img src={ImgLogo} onClick={() => navigate('/')} />
      <FormType selected={userType}>
        <button onClick={() => setUserType('BUYER')}>구매회원가입</button>
        <button onClick={() => setUserType('SELLER')}>판매회원가입</button>
      </FormType>
      <JoinForm userType={userType} />
    </Container>
  );
};

export default JoinPage;


const Img = styled.img`
  cursor: pointer;
`;


