import React from 'react'
import styled from "styled-components";

const Input = styled.input`
  font-family: 'GmarketSansMedium';
  width: 230px;
  padding: 15px 20px;
  background: #fff;
  border-radius: 10px;
  font-size: 20px;
  box-sizing: border-box;
  margin: 0 10px;
  border: none;
`

const Span = styled.span`
  font-size: 20px;
  line-height: 4;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Btn = styled.button`
  font-family: 'GmarketSansBold';
  position: relative;
  margin-top: 90px;
  padding: 12px 45px;
  background: #FCEE21;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 56px;
  color: #5B2386;
  font-size: 20px;
  border: none;
  &::after { 
    content: "";
    position: absolute;
    top: 5px;
    right: -70px;
    width: 60px;
    height: 60px;
    background: url(../img/click.png) center center no-repeat;
  }
`

export default function MainInput(props) {

  const clickTrue = (e) => {
    console.log(e);
    e.preventDefault();

    if (props.job === "") {
      alert('내용이 입력되지 않았습니다.');
      return props.setClick(false);
    }
    if (props.time === "") {
      alert('숫자가 입력되지 않았습니다.');
      return props.setClick(false);
    } else if (1 > props.time || props.time > 24) {
      alert('1~24 사이의 값을 입력해 주세요.');
      return props.setClick(false);
    }

    props.setClick(true);
  }

  return (
    <Form>
      <div>
        <Span>나는</Span>
        <Input id="inputJob" type="text" placeholder='예) 프로그래밍' onChange={props.userJob} value={props.job} />
        <Span>전문가가 될 것 이다.</Span>
      </div>
      <div>
        <Span>그래서 앞으로 매일 하루에</Span>
        <Input id="inputTime" type="number" placeholder='예) 5' onChange={props.userTime} value={props.time} />
        <Span>시간 씩 훈련할 것이다.</Span>
      </div>

      <Btn type='submit' onClick={clickTrue}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
    </Form>
  )
}
