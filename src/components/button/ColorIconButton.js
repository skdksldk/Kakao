import React from 'react';
import styled from 'styled-components';

const ColorIconButton = ({ iconSrc, children, ...props }) => {
  return (
    <Container {...props}>
      {iconSrc && <img src={iconSrc} />}
      {children}
    </Container>
  );
};

export default ColorIconButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-left: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff7f00;
  font-size: 18px;
  font-weight: 500;
`;
