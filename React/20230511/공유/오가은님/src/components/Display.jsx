import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'

const Btn = styled.button`
  font-family: 'GmarketSansBold';
  margin-top: 90px;
  padding: 12px 45px;
  background: #FCEE21;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 56px;
  color: #5B2386;
  font-size: 20px;
  border: none;
  cursor: pointer;
  &:last-child { 
    background: #fff;
  }
`

const BtnDiv = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
`

const Span = styled.span`
  font-size: 22px;
  text-align: center;
  display: block;
  text-align: center;
  margin-top: 10px;
`

const Strong = styled.strong`
  font-family: 'GmarketSansBold';
  font-size: 65px;
  margin: 0 5px;
`

const Div = styled.div`
  margin-top: 100px;
`

export default function display(props) {

  const sharing = () => {
    alert('할 줄 몰라용')
  }

  const calculatedTime = props.time;
  let time = () => {
    return parseInt((10000/calculatedTime), 10).toString();
  };

  return (
    <Div>
      <Span>당신은 <Strong>{props.job}</Strong> 전문가가 되기 위해서</Span>
      <br />
      <Span>대략 <Strong id='calc'>{time()}</Strong> 일 이상 훈련하셔야 합니다!</Span>

      <BtnDiv>
        <Btn type='button' onClick={props.openModal}>훈련하러 가기 GO!GO!</Btn>
        {props.modal && <Modal closeModal={props.closeModal} />}
        <Btn type='button' onClick={sharing}>공유하기</Btn>
      </BtnDiv>
    </Div>
  )
}