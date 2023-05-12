import React from "react";
import {ButtonOne, ButtonTwo, ButtonThree} from './Components/Buttons'


function App() {
    return (
        <div>
            <ButtonOne>버튼1</ButtonOne>
            <ButtonTwo>버튼2</ButtonTwo>
            <ButtonTwo disabled>버튼2</ButtonTwo>
            <ButtonThree>버튼3</ButtonThree>
        </div>
    );
}

export default App;
