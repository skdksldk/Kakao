import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;

  & > img {
    width: 230px;
  }
`;


export const FormContainer = styled.section`
  width: 550px;
  @media screen and (max-width: 1024px) {
    max-width:100%;
  }
  @media screen and (max-width: 768px) {
    max-width:100%;
  }
  @media screen and (max-width: 576px) {
    max-width:100%;
  }
`;

export const FormType = styled.article`
  margin-top: 50px;
  position: relative;
  top: 20px;
  display: flex;

  button {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 100%;
    font-size: 18px;
    background: none;
    border: 1px solid #c4c4c4;
    border-bottom: none;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${({ selected }) => `
    button:nth-child(${1 + +(selected === 'SELLER')}) {
      z-index: 20;
      background: #fff;
    }
    button:nth-child(${1 + +(selected === 'BUYER')}) {
      z-index: 0;
      background: #F2F2F2;
    }
  `}

  &::after {
    content: '';
    position: absolute;
    z-index: 30;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 25px;
    background-color: #fff;
  }
`;
