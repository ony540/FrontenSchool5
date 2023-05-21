import { createContext, useContext, useState } from "react";
//https://velog.io/@velopert/react-context-tutorial
//Context에서 유동적인 값을 관리하는 경우


//Context 만들기
const CounterContext = createContext();

// Provider 새로 만들기 - useState로 값 변경 관리
function CounterProvider({ children }) {
    const counterState = useState(1);
    return <CounterContext.Provider value={counterState}>{children}</CounterContext.Provider>;
}

//커스텀훅 useCounterState - useContext사용 
function useCounterState() {
    const value = useContext(CounterContext);
    if (value === undefined) {
        throw new Error("useCounterState should be used within CounterProvider");
    }
    return value;
}

//CounterProvider 의 자식 컴포넌트 어디서든지 useCoutnerState 를 사용하여 값을 조회하거나 변경 가능!!

function App() {
    return (
        // 이게 value값을 전달
        <CounterProvider>
            <div>
                <Value />
                <Buttons />
            </div>
        </CounterProvider>
    );
}

function Value() {
    //counter를 CounterProvider의 value로 반환
    const [counter] = useCounterState();
    return <h1>{counter}</h1>;
}
function Buttons() {
    //setCounter를 CounterProvider의 value로 반환
    const [, setCounter] = useCounterState();

    const increase = () => setCounter((prev) => prev + 1);
    const decrease = () => setCounter((prev) => prev - 1);

    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default App;

//Value 와 Buttons 컴포넌트는 이제 Props로 데이터나 함수를 부모 컴포넌트에게서 전달받지 않고, Context에 직접 접근하여 CounterProvider 의 상태를 조회하고 변경