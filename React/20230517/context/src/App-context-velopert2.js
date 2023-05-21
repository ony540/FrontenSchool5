import { createContext, useContext, useMemo, useState } from "react";
//데이터를 어떻게 업데이트할 지에 대한 로직을 컴포넌트가 아니라 Provider단에서 구현하고 싶으시다면 다음과 같이
const CounterContext = createContext();

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

    const value = useMemo(() => [counter, actions], [counter, actions]);

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

function useCounter() {
    const value = useContext(CounterContext);
    if (value === undefined) {
        throw new Error("useCounterState should be used within CounterProvider");
    }
    return value;
}

function App() {
    return (
        <CounterProvider>
            <div>
                {/* 실제로 변화가 반영되는 곳은 Value 컴포넌트뿐인데, Buttons 컴포넌트도 리렌더링되기 때문입니다. (액션안의 함수는 바뀔 필요가없음 근데 자꾸 리렌더링해서 만듦!) */}
                <Value />
                <Buttons />
            </div>
        </CounterProvider>
    );
}

function Value() {
    const [counter] = useCounter();
    return <h1>{counter}</h1>;
}

function Buttons() {
    const [, actions] = useCounter();

    return (
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default App;


//3. 값과 업데이트 함수를 두개의 Context로 분리하기 
//실제로 변화가 반영되는 곳은 Value 컴포넌트뿐인데, Buttons 컴포넌트도 리렌더링되는 것을 막기 위해 
//기존의 CounterContext 를 CounterValueContext와 CounterActionsContext로 분리해주었습니다. 
//그리고, 두 Provider를 모두 사용해주었지요. 
//커스텀 Hook 또한 두개로 분리했습니다