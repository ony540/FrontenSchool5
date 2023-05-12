import React from "react";
import styled, { css } from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

// 상속받는 방법1. styled(상속받을컴포넌트) 태그지정은 따로못함 버튼끼리!
const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`
//상속받는 방법2. One, Two는 태그 지정할 수 없음 / 상속받은 아이만 태그지정!
const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`

// Sass 문법도 사용할 수 있음 - 선택자 안에 선택자
const UniAfter = styled.div`
    color: royalblue;
    &:after {
    content: "!!";
}`
// 컴파일 후
// a { /* style 1 */ }
// a::after { /* style 2 */ }

function App() {
    return (
        <div>
          <Three>스타일만 상속받아서 적용하기</Three>
          <UniAfter>Goodd!</UniAfter>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );
}

export default App;