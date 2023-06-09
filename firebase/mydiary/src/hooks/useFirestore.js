import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore, timeStamp } from "../firebase/config";

const initState = {
  document: null,
  isPending: false,
  error: null,
  isSuccess: false,
};

// 전달 받는 action에 따른 state 업데이트를 위한 함수
const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, success: false, error: null };
    case "addDoc":
      return { isPending: false, document: action.payload, success: true, error: null };
    case "error":
      return { isPending: false, document: null, success: false, error: action.payload };
    default:
      return state;
  }
};

// 우리가 데이터를 저장할 컬렉션을 인자로
export const useFirestore = (transacton) => {
  // response에는 우리의 요청에 대한 firestore로 부터의 응답을 저장합니다.
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용합니다.
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef : 우리가 만들 컬랙션의 참조
  // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성
  const colRef = collection(appFireStore, transacton);
  // console.log(colRef);

  // 컬렉션에 문서를 추가합니다.
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      
      // fromDate : 주어진 시간정보를 통해 새로운 타임 스탬프를 생성합니다.
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, {...doc,createdTime});
      dispatch({ type: "addDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  // 컬렉션에서 문서를 제거합니다.
  const deleteDocument = async (id) => {
    dispatch({ type: "pending"});
    try{
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({type:"deleteDoc", payload: docRef});
    } catch (error) {
      dispatch({type:'error', payload: error.message});
    }
  };

  return { addDocument, deleteDocument, response };
};
