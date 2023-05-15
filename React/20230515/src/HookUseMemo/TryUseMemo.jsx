import { useState, useMemo } from "react";

/*
    const 저장할변수 = useMemo(()=> {
        return 계산하는_무거운함수()
    }, [감시하고_있는_변수])

    모든 결과를 다 저장하면 메모리 낭비가 되기 때문에 주의해주시
 */
function 부하() {
    console.log("값 새로 만드는중");
    let s = 0;
    for (let i = 0; i < 1000000000; i++) {
        s += i;
    }
    console.log("값 새로 만들기끝");
    return s;
}

function TryUseMemo() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const handleCountUp = (e) => {
        setCount(count + 1);
        console.log(count);
    };
    const handleCountUpTwo = (e) => {
        setCountTwo(countTwo + 1);
        console.log(countTwo);
    };

    console.log("랜더링!!");
    // 평소에는 memo되어있는걸 가져다쓰고
    // countTwo가 바뀌었을때 부하 함수를 실행키는 메모
    const result = useMemo(부하, [countTwo]);

    return (
        <div className="App">
            <div>useMemo 카운터</div>
            {/* 일반적 useState 하면 렌더링된다 */}
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>

            {/* countTwo를 변형시키면 부하함수를 실행시킨다(평소엔 memo되어있는거 가져다씀) */}
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
            <br />
            <br />
            <h1>계산 결과 : {result}</h1>
        </div>
    );
}
export default TryUseMemo;
