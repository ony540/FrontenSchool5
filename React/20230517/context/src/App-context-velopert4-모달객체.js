//약간 굳이 만들자면? 의 느낌
import { createContext, useContext, useMemo, useState } from "react";

const ModalValueContext = createContext();
const ModalActionsContext = createContext();

function ModalProvider({ children }) {
    //state로 모달의 비져블과 메세지를 객체로 지정
    const [modal, setModal] = useState({
        visible: false,
        message: "",
    });

//액션들은 처음에 한번만 오픈함수 닫는함수 만들기
    const actions = useMemo(
        () => ({
            //오픈할땐 메세지 인자로 받기
            open(message) {
                setModal({
                    message,
                    visible: true,
                });
            },
            close() {
                setModal((prev) => ({
                    ...prev,
                    visible: false,
                }));
            },
        }),
        []
    );

    //벨류, 행동 나눠서 컨텍스트 제공
    return (
        <ModalActionsContext.Provider value={actions}>
            <ModalValueContext.Provider value={modal}>{children}</ModalValueContext.Provider>
        </ModalActionsContext.Provider>
    );
}

//커스텀훅 1 모달의 벨류를 지정
function useModalValue() {
    const value = useContext(ModalValueContext);
    if (value === undefined) {
        throw new Error("useModalValue should be used within ModalProvider");
    }
    return value;
}

//커스텀훅2 모달여는 행동
function useModalActions() {
    const value = useContext(ModalActionsContext);
    if (value === undefined) {
        throw new Error("useModalActions should be used within ModalProvider");
    }
    return value;
}

//원하는 곳 어디서든지 다음과 같이 모달을 띄울 수 있다
function WhereModal() {
    const { open } = useModalActions();

    const handleSomething = () => {
        open("안녕하세요!");
    };
    return <div onClick={handleSomething}>모달열기</div>;
}

function App() {
    return (
        <div>
            <ModalProvider>
                <WhereModal />
            </ModalProvider>
        </div>
    );
}

export default App;
