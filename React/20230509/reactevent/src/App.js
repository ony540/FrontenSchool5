import { useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import Modal from "./Modal";

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>
      안녕, {name} {i}호
    </h1>
  ));

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

function App() {
    const user = {
        idUser: "jaehyun@weniv.com",
        pwUser: '1234',
    };
    const [islogin, setIslogin] = useState(false);
    const [open, setOpen] = useState(false);


    const makeOpen =() => {
      setOpen(true);
    }
    const makeClose =() => {
      setOpen(false);
    }

    // setlogin으로 상태 끌어올리기!
    return (
      <>
      <Hello name="licat"/>
      { islogin  ? <Homepage/>  : <Login user={user} setIslogin={setIslogin}/> }

      <button onClick={makeOpen}>모달열기</button>
      { open  &&  <Modal makeClose={makeClose}>
        <h2>사용약관에 대해 말씀</h2>
        <p>Loremdsgfs loren</p>
      </Modal> }
    
      </>
    );
}

export default App;
