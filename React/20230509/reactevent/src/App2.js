import { useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import Modal from "./Modal";

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
