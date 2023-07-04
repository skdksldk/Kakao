import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundIcon from '/public/assets/ico_empty_ryan.png';
import ColorButton from '/src/components/button/ColorButton';
import { ButtonContainer, Container, TextContainer } from './style';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (

    <Container>
    <img style={{height:'250px'}} src={NotFoundIcon} />
    <TextContainer>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.<br></br>웹
        주소가 올바른지 확인해주세요.
      </p>
      <ButtonContainer>
        <ColorButton size="M" width="150px" onClick={() => navigate('/')}>
          메인으로
        </ColorButton>
        <ColorButton
          size="M"
          width="150px"
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

export default NotFound;

