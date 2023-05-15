import React, { useState, useRef } from "react";

function Counter2() {
    const [num2, setNum2] = useState(0);
    const num = useRef(0);

    return (
        <>
            {/* 누르면 바로 바뀜 */}
            <button onClick={() => setNum2(num2 + 1)}>useState 버튼</button>
            <div>{num2}</div>

            {/* 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음 */}
            {/* 랜더링될떄 값이 바뀜 - 위의 useState가 바뀔때  */}
            <button
                onClick={() => {
                    num.current += 1;
                    console.log(num.current);
                }}
            >
                useRef 버튼
            </button>
            <div>{num.current}</div>
        </>
    );
}

export default Counter2;
