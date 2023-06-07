import { createContext, useReducer } from "react";

//context객체를 생성
const AuthContext = createContext();

//usereducer - 객체와 같이 복잡한 형태의 데이터를 다양한 경우에 따라 관리해야할 때 사용
// 리듀서 함수를 선언합니다.
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
		    //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
            return { ...state, user: action.payload }   
        default:
            return state
    }
}

//react에서 children 컴포넌트 태그의 사이에 위치한 내용을 가르킨다
const AuthContextProvider = ({ children }) => {

    //const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
    const [state, dispatch] = useReducer(authReducer, {user: null})

    return (
        // { ...state, dispatch } 이 두 가지 값이 context객체를 통해 접근할 수 있는 값이 됩니다.
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }