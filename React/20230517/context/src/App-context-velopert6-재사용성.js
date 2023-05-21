// 재사용성이 높은 컴포넌트를 만들때도 매우 유용합

import { useState } from "react";

//childeren이랑 온클릭도 줘야함
function Item({ active, children, onClick }) {
    const activeStyle = {
        backgroundColor: "black",
        color: "white",
    };
    const style = {
        cursor: "pointer",
        padding: "1rem",
    };
    return (
        // 이렇게 스프레드 연산자로 값 넣기
        <div style={active ? { ...style, ...activeStyle } : style} onClick={onClick}>
            {children}
        </div>
    );
}

function App() {
    const [activeId, setActiveId] = useState(1);
    return (
        <div>
            <Item active={activeId === 1} onClick={() => setActiveId(1)}>
                Hello
            </Item>
            <Item active={activeId === 2} onClick={() => setActiveId(2)}>
                World
            </Item>
            <Item active={activeId === 3} onClick={() => setActiveId(3)}>
                React
            </Item>
        </div>
    );
}

export default App;
