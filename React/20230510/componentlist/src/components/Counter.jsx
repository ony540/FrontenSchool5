import React from "react";
import { useState } from "react";

export default function ProductList() {
    const [count, setCount] = useState(0);

    function up() {
        /**
         *  setCount(count + 1)
         * setCount(count + 1) //이렇게 하면 +2가 되는게 아니라 +1만 된다!!
         */
        /**
         *  setCount((prevdata)=>{return prevdata + 1})
         *  setCount((prevdata)=>{return prevdata + 1}) // 이렇게 하면 +2가 된다!
         */
        // 이런식으로 하기 만약에 통채로 그 상태가 바뀌는 경우에는 사용할 필요 X ex) setCount(false)
        setCount((prevCount)=> prevCount + 1)

    }
    function down() {
        // setCount(count - 1)
        setCount((prevdata) => {
            return prevdata - 1;
        });
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={up}>+1</button>
            <button onClick={down}>-1</button>
        </>
    );
}
