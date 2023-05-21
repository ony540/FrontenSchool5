import { createContext, useContext, useMemo, useRef, useState } from "react";

const TodosValueContext = createContext();
const TodosActionsContext = createContext();

function TodosProvider({ children }) {
    const idRef = useRef(3);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "밥먹기",
            done: true,
        },
        {
            id: 2,
            text: "잠자기",
            done: false,
        },
    ]);

    const actions = useMemo(
        () => ({
            add(text) {
                const id = idRef.current;
                idRef.current += 1;
                setTodos((prev) => [
                    ...prev,
                    {
                        id,
                        text,
                        done: false,
                    },
                ]);
            },
            toggle(id) {
                setTodos((prev) =>
                    prev.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                done: !item.done,
                            }
                            : item
                    )
                );
            },
            remove(id) {
                setTodos((prev) => prev.filter((item) => item.id !== id));
            },
        }),
        []
    );

    return (
        <TodosActionsContext.Provider value={actions}>
            <TodosValueContext.Provider value={todos}>{children}</TodosValueContext.Provider>
        </TodosActionsContext.Provider>
    );
}

//값에 변동이 있는 것들을 제어하는 훅 아마 edit일듯
function useTodosValue() {
    const value = useContext(TodosValueContext);
    if (value === undefined) {
        throw new Error("useTodosValue should be used within TodosProvider");
    }
    return value;
}

function useTodosActions() {
    const value = useContext(TodosActionsContext);
    if (value === undefined) {
        throw new Error("useTodosActions should be used within TodosProvider");
    }
    return value;
}

//투두 목록 더할 곳
function TodoAdd() {
    const { add } = useTodosActions();

    //더할때 텍스트를 받겠지 인풋이 있겠지 이안에
    const handleSubmit = () => {
        add(text);
    };
    return (
        <>
            <div onClick={handleSubmit}>추가하기</div>
        </>
    );
}

//투두 수정할곳(체크하고 삭제하기)
function TodoEdit() {
    const { toggle, remove } = useTodosActions();

    //div에 id가 있겠지 아님 상위 프로바이더나
    const handleToggle = () => {
        toggle(id);
    };

    const handleRemove = () => {
        remove(id);
    };
    return (
        <>
            <div onClick={handleToggle}>체크하기</div>
            <div onClick={handleRemove}>삭제하기</div>
        </>
    );
}

function App() {
    return (
        <div>
            <TodosProvider>
                {/* 얘네처럼 액션을 받는 애들은 리렌더링되지않는다 */}
                <TodoAdd />
                <TodoEdit />
            </TodosProvider>
        </div>
    );
}

export default App;
