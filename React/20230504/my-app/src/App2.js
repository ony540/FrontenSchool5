import './App.css';
import NewMenu from './components/newMenu/NewMenu';

function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{backgroundColor: "tomato"}}
      />
    </div>
  );   
}

function App() {
  const name = '라이캣!';
  const 변수 = 'value'
  const 함수 = ()=> {console.log('함수')};
  const 값 = false;

  // 시간변수
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  // 리스트 렌더링
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

const defSt ={borderBottom: '1px solid black'}
  const visitSt = {backgroundColor:"royalblue", color:"white",borderBottom: '1px solid black'}

  return (
    <div>
      {`${[1,2,3]}`}
      {100 + 1}
      {/* {'hello' + 'world'} 가능 but 비추 */}
      {[1, 2, 3].map(x => x**2)}
      {함수()}
      {변수}
      {값?'one':'two'}

      <TextArea/>
      <NewMenu/>
      <h1 hello="hi" >안녕 {name}!!</h1>
      <h1 style={{}}>안녕 라이캣 2호!!</h1>

      {/* 실습1 */}
      <ul style={{backgroundColor:"black", color:"white"}}>
        <li style={{color:'red'}}>년 : {year}</li>
        <li>월/일 : {month}/{date}</li>
        <li>시간 : {hour}시 {min}분 {sec}초</li>
      </ul>

      {/* 실습2 */}
      <ul style={{border: "1px solid black"}}>
        <li style={list[0].visited ? visitSt : defSt}>{list[0].area}</li>
        <li style={list[1].visited ? visitSt : defSt}>{list[1].area}</li>
        <li style={list[2].visited ? visitSt : defSt}>{list[2].area}</li>
        <li style={list[3].visited ? visitSt : {}}>{list[3].area}</li>
      </ul>


    </div>
  );
}

export default App;