import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 50px;
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Content = styled.section`
  display: flex;
  gap: 80px;
  @media screen and (max-width: 1000px) {
    gap: 40px;
    flex-wrap: wrap;
  }
`;

export const Warning = styled.section`
  flex-shrink: 0;
  width: 320px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  h3 {
    color: #eb5757;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  article {
    margin-top: 10px;
    padding: 20px;
    background-color: #FFF8DC;
    border-radius: 5px;
  }
`;

export const Form = styled.section`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  section:nth-child(1) {
    img {
      width: 460px;
      height: 460px;
      object-fit: cover;
      cursor: pointer;
      @media screen and (max-width: 1000px) {
        max-width: 100%;
      }
    }
    input {
      display: none;
    }
  }
  section:nth-child(2) {
    flex-grow: 1;
    input {
      padding: 16px;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      @media screen and (max-width: 1000px) {
        max-width: 100%;
      }
      &:nth-child(2) {
        width: 100%;
      }
      & + label {
        margin-top: 16px;
      }
    }
    div {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
    }
  }
  section:nth-child(3) {
    width: 100%;
    textarea {
      width: 100%;
      height: 200px;
      resize: none;
      padding: 16px;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      @media screen and (max-width: 1000px) {
        max-width: 100%;
      }
    }
    div {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
      gap: 14px;
    }
  }
  label {
    margin-bottom: 10px;
    display: block;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
  } 
`;