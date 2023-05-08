import React,{ Fragment } from 'react';
// 위처럼 import하면 React.Fragment대신에 <Fragment><Fragment/>만 작성해도됨 구조분해할당 
//이것도 import 안하고 그냥 <> </> 하면된다! -> 시멘틱하게 작성가능
import './FragmentsTest.css';

function ListItem({ item }) {
  return (
    <Fragment className="my-fragment">
      <dt>사과</dt>
      <dd>사과는 과일이 제철이죠</dd>
    </Fragment>
  );
}
// 속성을 넣을 수 있지만
// 화면에 랜더링 되지 않기 때문에 스타일과 관련된 속성 무의미 ! !
// key 값을 설정할 때 많이 사용

function Glossary(props) {
  return (
    <dl>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      {/* {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return (
    list.map((item) => {
      return (<>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : '아직 안감'}</p>
      </>)
    })

  );
}


function App() {
  return (
		<div>
			<h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>
      <Glossary/>
      <MyComponent/>
		</div>
  );
}
export default App;
