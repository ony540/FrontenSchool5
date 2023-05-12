import { useState } from "react";
import MainInput from "./components/MainInput";
import Display from './components/Display';

function App() {
  const [job, setJob] = useState("");
  const [time, setTime] = useState("");

  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);

  const userJob = e => {
    setJob(e.target.value);
  };

  const userTime = e => {
    setTime(e.target.value);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  }

  return (
    <div>
      <MainInput setClick={setClick} userJob={userJob} userTime={userTime} job={job} time={time} />
      {click && <Display job={job} time={time} closeModal={closeModal} openModal={openModal} modal={modal} />}
    </div>
  );
}
export default App;

// ~~1. 시간 변환~~
// 2. 로딩 표시
// 3. url 복사
// 4. 코드 리팩토링