//3. 값과 업데이트 함수를 두개의 Context로 분리하기
//실제로 변화가 반영되는 곳은 Value 컴포넌트뿐인데, Buttons 컴포넌트도 리렌더링되는 것을 막기 위해

import { createContext, useContext, useMemo, useState } from "react";

//기존의 CounterContext 를 CounterValueContext와 CounterActionsContext로 분리해주었습니다.
const CounterValueContext = createContext();
const CounterActionsContext = createContext();

function CounterProvider({ children }) {
    const [counter, setCounter] = useState(1);
    const actions = useMemo(
        () => ({
            increase() {
                setCounter((prev) => prev + 1);
            },
            decrease() {
                setCounter((prev) => prev - 1);
            },
        }),
        []
    );
    //그리고, 두 Provider를 모두 사용해주었지요.
    return (
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>{children}</CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    );
}

//커스텀 Hook 또한 두개로 분리했습니다
function useCounterValue() {
    const value = useContext(CounterValueContext);
    if (value === undefined) {
        throw new Error("useCounterValue should be used within CounterProvider");
    }
    return value;
}

function useCounterActions() {
    const value = useContext(CounterActionsContext);
    if (value === undefined) {
        throw new Error("useCounterActions should be used within CounterProvider");
    }
    return value;
}

function App() {
    return (
        <CounterProvider>
            <div>
                <Value />
                <Buttons />
            </div>
        </CounterProvider>
    );
}
//이러면 벨류에 종속적인 이것만 리렌더링 된다
function Value() {
    console.log("Value");
    const counter = useCounterValue();
    return <h1>{counter}</h1>;
}
function Buttons() {
    console.log("Buttons");
    const actions = useCounterActions();

    return (
        <div>
            {/* 엑션즈의 메서드 쓰기 */}
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default App;
