import React, { useState } from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import TermModal from './TermModal';
import IconUnchecked from '../../../public/assets/check-box.svg';
import IconChecked from '../../../public/assets/check-fill-box.svg';
import { termModal } from '../../util/modal';


const JoinFooter = ({ onJoinClick, canPushJoin, canJoin, termCheck, setTermCheck }) => {
  const [modalOn, setModalOn] = useState(false);
  const [modalIdx, setModalIdx] = useState();

  return (
    <>
    <Container>
      <div>
        <Checkbox
          type="checkbox"
          id="checkTerms"
          onChange={() => setTermCheck(!termCheck)}
        />
        <label htmlFor="checkTerms" />
        <p>
        호두샵의{' '}
            <span
              onClick={() => {
                setModalIdx(0);
                setModalOn(true);
              }}
            >
              이용약관
            </span>{' '}
            및{' '}
            <span
              onClick={() => {
                setModalIdx(1);
                setModalOn(true);
              }}
            >
              개인정보처리방침
            </span>
            에 대한 내용을 확인하였고 동의합니다.
        </p>
      </div>
      <ColorButton
         color={canPushJoin ? 'orange' : 'gray'}
         onClick={canPushJoin ? onJoinClick : () => {}}
      >
        가입하기
      </ColorButton>
    </Container>
      {modalOn && (
        <TermModal
          setIsOn={setModalOn}
          title={termModal[modalIdx].title}
          content={termModal[modalIdx].content}
        />
      )}
  </>
  );
};

export default JoinFooter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 35px;
  @media screen and (max-width: 1024px) {
    max-width:100%;
  }
  @media screen and (max-width: 768px) {
    max-width:100%;
  }
  @media screen and (max-width: 576px) {
    max-width:100%;
  }

  div {
    display: flex;
    align-items: flex-start;
  }
  p {
    margin-left: 10px;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
    span {
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;
    }
  }
  button {
    margin-top: 34px;
  }
`;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 17px;
    height: 16px;
    margin-top: 1px;
    background: url(${IconUnchecked}) center/16px 16px;
  }
  &:checked + label {
    background-image: url(${IconChecked});
  }
`;