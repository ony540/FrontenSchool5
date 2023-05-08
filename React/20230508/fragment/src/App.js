import React,{ Fragment } from 'react';
// 위처럼 import하면 React.Fragment대신에 <Fragment><Fragment/>만 작성해도됨 비구조할당 
//이것도 import 안하고 그냥 <> </> 하면된다! -> 시멘틱하게 작성가능
import './FragmentsTest.css';

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function ItemList() {

  const itemList = items.map(({ id, name, desc }) => {
    return (<Fragment key={id}>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </Fragment>);
  });

  return (
    <dl>
      {itemList}
    </dl>
  )

}

function App() {
  return (
		<dl>
      <ItemList/>
		</dl>
  );
}
export default App;
