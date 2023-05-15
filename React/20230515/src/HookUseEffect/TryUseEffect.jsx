import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const handleCountUp = (e) => {
        setCount(count + 1);
    };

    //count(마지막인자 - dependency array 의존성 배열)가 변했을때 동작할 행동을 useEffect를 이용해 구현
    //새로고침을 하면 useState(0)에서 count값을 0으로 초기화하면서 count의 값이 변하기 때문에 클릭하지 않았는데도 "짝수입니다!"라는 메시지가 나온다

    useEffect(() => {
        // if (count !== 0) { //렌더링될때 의 상황을 제외! (이것도 괜찮지만 문제점이 -  페이지 들어가자마자 나와 불편 따라서 이 방식 보다 첫 렌더인지 확인하는 useState를 만들어서 확인하는 방식이 더 좋다!!  )

        if (isFirstRender) {
            console.log("난 처음 렌더링되었는지 확인하고있지. 첫");
            setIsFirstRender(false);
        } else {
            console.log("난 처음 렌더링되었는지 확인하고있지. 근데이건 두번째지");

            if (count % 2) {
                alert("홀수입니다");
            } else {
                alert("짝수입니다");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>Up!</button>
        </>
    );
}

//1. 전체가 한번 실행됨
//2. setCount로 count가 바뀜 (상태변경)
//3. cleanup 실행 -> useEffect내 코드실행 인가? 맞아??
export default Counter;

/*

// 컴포넌트가 업데이트 될 때마다 매번 실행
//의존을하지않아서
useEffect(()=>{
	console.log('hello world');
})

// 처음에만 실행
//의존할 대상이 없어서
useEffect(()=>{
	console.log('hello world');
}, [])

// 변수들의 변화가 일어날 때마다 실행
//뱐스1, 변수2에 의존
useEffect(()=>{
	console.log('hello world');
}, [변수1, 변수2...])

 */
