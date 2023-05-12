import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 600px;
  height: 600px;
  background-color:#fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Btn = styled.button`
  font-family: 'GmarketSansBold';
  padding: 12px 45px;
  background: #FCEE21;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 56px;
  color: #5B2386;
  font-size: 20px;
  border: none;
  cursor: pointer;
`

const Img = styled.img`
  width: 420px;
`

const P = styled.p`
  font-family: 'OTEnjoystoriesBA';
  font-size: 36px;
  color: #5B2386;
  &:first-child { 
    font-size: 76px;
  }
`

export default function Modal(props) {
  return (
    <Div>
      <P>화이팅!!♥♥♥</P>
      <P>당신의 꿈을 응원합니다!</P>
      <Img src="./img/licat.png" alt="라이캣" />
      <Btn onClick={props.closeModal}>종료하고 진짜 훈련하러 가기 GO!GO!</Btn>
    </Div>
  )
}
