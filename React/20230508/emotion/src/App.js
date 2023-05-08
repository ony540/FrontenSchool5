import React,{useState} from "react";
import ButtonList from "./components/ButtonList";
import DisplayMood from "./components/DisplayMood"
import './App.css'

function App() {
  const [emo, setEmo] = useState(undefined);

  return (
    <div>
      <ButtonList emo={emo} getEmotion={setEmo}/>
      <DisplayMood emo={emo} />
    </div>
  );
}
export default App;
