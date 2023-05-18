import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function App() {
    const [num, setNum] = useState(0);

    // 버튼누르면 리렌더링되면서 다시 11에서 10이 될떄 깜빡거림
    /*
    useEffect(() => {
      setNum(10); //사실은 엄청 오래걸리고 어려운 로직
    }, [num]);
    */
    
    // useLayout 이면 컴포넌트가 화면에 그려지기 전에 값이 지정됨!! -> 깜빡거리지않음!!
    useLayoutEffect(() => {
        setNum(10); //사실은 엄청 오래걸리고 어려운 로직

    }, [num]);

    return (
        <>
            <div>{num}</div>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
        </>
    )
}