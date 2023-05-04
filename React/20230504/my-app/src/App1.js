import "./App.css";


function App() {
  const hello = 0;
  //여기는 js할 때와 똑같이 주석을 입력합니다! 왜냐면 여기는 JS의 영역이니까요 :)
  return (
    <div className="App">
 
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        안녕, 라이캣 1호
      </h1>

      <h2>안녕, 라이캣 2호!</h2>

      {/* 태그는 무조건 닫아줘야합니다! 안그러면 에러나와요! */}
      {/* class대신 className=""로 진행! */}
      <div className="newClass"></div>

      {/* <button data-name =""> </button> 이러면 오류 */}
      {/* <button dataName ="" >버튼1</button>  */}

      {/* 값은 문자열 제외 중괄호해야함 */}
      <button hello={hello} hello1="hello">
        버튼1
      </button>

      {/* 같은 표현 */}
      {/* <input type='radio' checked>Banana</input> */}
      {/* <input type="radio" checked={true}></input> */}
    </div>
  );
}

export default App;
