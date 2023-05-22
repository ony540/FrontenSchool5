// 재사용성이 높은 컴포넌트를 만들때도 매우 유용함 - 최종본

//항목들을 JSX로 표현하고 싶고, 반복되는 코드들을 정리해주고 싶다면, 이 또한 Context를 사용하여 쉽게 해결할 수 있습니다.
import { createContext, useContext, useMemo, useState } from "react";

const ItemGroupContext = createContext();

//아이템그룹
function ItemGroup({ children, activeId, onSelect }) {
    //activeId, onSelect를 객체로 값을 가지고 이게 바뀔때만 값이 바뀐다(렌더링된다)
    const value = useMemo(
        () => ({
            activeId,
            onSelect,
        }),
        [activeId, onSelect]
    );
    // ItemGroupContext 의 벨류는 {activeId, onSelect} /  칠드런을 가짐(아이템3개 id를 각각가진)
    return <ItemGroupContext.Provider value={value}>{children}</ItemGroupContext.Provider>;
}

//커스텀 훅 
function useItemGroup() {
    //컨텍스트를 벨류로 정하고 벨루 반환
    const value = useContext(ItemGroupContext);
    if (value === undefined) {
        throw new Error("Item component should be used within ItemGroup");
    }
    return value;
}

//아이템 컴포넌트
function Item({ children, id }) {
    const activeStyle = {
        backgroundColor: "black",
        color: "white",
    };
    const style = {
        cursor: "pointer",
        padding: "1rem",
    };
    //커스텀 훅 사용해서 컨텍스트의 벨류를  activeId, onSelect 구조분해할당으로 가져오기
    const { activeId, onSelect } = useItemGroup();

    //행동을 여기다 넣은 것
    //활설화됐는지 불린값지정
    const active = activeId === id;
    //온클릭 변수에 온셀렉트(id) 
    const onClick = () => onSelect(id);
    return (
        //클릭되면 id가 온셀랙되도록해라
        <div style={active ? { ...style, ...activeStyle } : style} onClick={onClick}>
            {children}
        </div>
    );
}

function App() {
    //활성화된 아이디
    const [activeId, setActiveId] = useState(1);
    //또다른 활성화 아이디 (이렇게 재활용 가능핟다는뜻)
    const [anotherActiveId, setAnotherActiveId] = useState(4);

    return (
        <div>
            {/*  */}
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
