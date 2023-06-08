import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

//context객체를 생성
const AuthContext = createContext();

//usereducer - 객체와 같이 복잡한 형태의 데이터를 다양한 경우에 따라 관리해야할 때 사용
// 리듀서 함수를 선언합니다. - 함수 ! !
const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "authIsReady":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

//react에서 children 컴포넌트 태그의 사이에 위치한 내용을 가르킨다
const AuthContextProvider = ({ children }) => {
  //const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false });
  console.log("context: ", state); //react는 새로고침하면 초기화됨 user 정보

  useEffect(() => {
    // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
    // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다.
    // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: "authIsReady", payload: user });
    });

    // 클린업 함수로 구독을 취소하도록 만듭니다.
    return () => {
      unsubscribe();
    };
  }, []); //처음에 한번만 적용

  return (
    // { ...state, dispatch } 이 두 가지 값이 context객체를 통해 접근할 수 있는 값이 됩니다.
    //state가 회원정보를 의미
    <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
