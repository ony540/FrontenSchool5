// 재사용성이 높은 컴포넌트를 만들때도 매우 유용함 - 최종본

//항목들을 JSX로 표현하고 싶고, 반복되는 코드들을 정리해주고 싶다면, 이 또한 Context를 사용하여 쉽게 해결할 수 있습니다.
import { createContext, useContext, useMemo, useState } from "react";

const ItemGroupContext = createContext();

function ItemGroup({ children, activeId, onSelect }) {
    //activeId, onSelect를 객체로 값을 가지고 이게 바뀔때만 값이 바뀐다(렌더링된다)
    const value = useMemo(
        () => ({
            activeId,
            onSelect,
        }),
        [activeId, onSelect]
    );
    return <ItemGroupContext.Provider value={value}>{children}</ItemGroupContext.Provider>;
}
function useItemGroup() {
    const value = useContext(ItemGroupContext);
    if (value === undefined) {
        throw new Error("Item component should be used within ItemGroup");
    }
    return value;
}

function Item({ children, id }) {
    const activeStyle = {
        backgroundColor: "black",
        color: "white",
    };
    const style = {
        cursor: "pointer",
        padding: "1rem",
    };
    const { activeId, onSelect } = useItemGroup();
    const active = activeId === id;
    const onClick = () => onSelect(id);
    return (
        <div style={active ? { ...style, ...activeStyle } : style} onClick={onClick}>
            {children}
        </div>
    );
}

function App() {
    const [activeId, setActiveId] = useState(1);
    const [anotherActiveId, setAnotherActiveId] = useState(4);

    return (
        <div>
            <ItemGroup activeId={activeId} onSelect={setActiveId}>
                <Item id={1}>Hello</Item>
                <Item id={2}>World</Item>
                <Item id={3}>React</Item>
            </ItemGroup>
            <hr />
            <ItemGroup activeId={anotherActiveId} onSelect={setAnotherActiveId}>
                <Item id={4}>Bye</Item>
                <Item id={5}>World</Item>
                <Item id={6}>Context</Item>
            </ItemGroup>
        </div>
    );
}

export default App;
