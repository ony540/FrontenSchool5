import { appFireStore } from "../firebase/config";
import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {
  // 문서들의 데이터, 에러상태 관리
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // collection에 변화가 생길때마다 실행
  useEffect(() => {

    let q;
    if(myQuery){
      q = query(collection(appFireStore,transaction), where(...myQuery),orderBy("createTime", "desc"));
    }

    // onSnapshot 함수는 가장 최신의 컬랙션의 내용을 반환하는 함수 
    // 데이터 수신을 중단하기 위한 unsubscribe 함수를 반환
    const unsubscribe = onSnapshot(
      collection(appFireStore, transaction),

      // 응답받은 컬랙션이 snapshot에 저장
      (snapshot) => {
        let result = [];

        // docs 는 문서를 배열로 저장
        snapshot.docs.forEach((doc) => {
          // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열합니다. 그리고 나중에 사용할 수 있도록 문서 id 값을 추가합니다.
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 됩니다. 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 됩니다.
    // 참고 : https://ko.reactjs.org/docs/hooks-effect.html#example-using-hooks-1
    return () => {
      unsubscribe();
    };
  }, []);

  return { documents, error };
};
