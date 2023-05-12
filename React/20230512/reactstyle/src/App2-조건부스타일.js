import React from "react";
import styled from "styled-components";

/**
  const 변수명 = styled.태그명`
	background-color : red;
  `;
 */
const ContentDiv = styled.div`
  margin: 40px;
  `;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: ${({name}) => (name === 'hello'? 'red' : 'blue')};
  /* 조건부 스타일지정가능 */
`;


const App = () => {
	return (
		<ContentDiv>
            <ContentH2 name="hello">Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
        </ContentDiv>
	);
};

// Hello에 있는 h2는 위의 ContentH2 컴포넌트 안에 있지않음으로 color가 적용되지않는다!
function Hello(){
  return <h2>hello world</h2>
}

export default App;