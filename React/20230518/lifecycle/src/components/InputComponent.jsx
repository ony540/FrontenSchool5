import React from 'react';
import useInput from '../hooks/useInput';

function InputComponent() {
  //useInput에서 반환하는 value, onchange를 구조분해 할당으로 받기
    const [value, onChange] = useInput(""); 
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default InputComponent;